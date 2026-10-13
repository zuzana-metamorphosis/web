"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { SearchCategory } from "@/lib/search-engine"

interface SearchContextType {
  isOpen: boolean
  query: string
  category: SearchCategory
  setIsOpen: (open: boolean) => void
  openSearch: (initialQuery?: string) => void
  closeSearch: () => void
  toggleSearch: () => void
  setQuery: (query: string) => void
  setCategory: (category: SearchCategory) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<SearchCategory>("all")

  const openSearch = useCallback((initialQuery?: string) => {
    if (initialQuery !== undefined) {
      setQuery(initialQuery)
    }
    setIsOpen(true)
  }, [])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleSearch = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // Global keyboard shortcuts (Cmd+K, Ctrl+K, '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        return
      }

      // '/' when not in an input/textarea
      if (e.key === "/" && !isOpen) {
        const target = e.target as HTMLElement
        const isEditable =
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable

        if (!isEditable) {
          e.preventDefault()
          setIsOpen(true)
        }
      }

      // Escape to close
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        query,
        category,
        setIsOpen,
        openSearch,
        closeSearch,
        toggleSearch,
        setQuery,
        setCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
