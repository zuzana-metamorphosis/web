import { notFound } from "next/navigation"
import { productsData } from "@/lib/products-data"
import { ProgramDetailView } from "@/components/boty/program-detail-view"

export function generateStaticParams() {
  return productsData.map((p) => ({ id: p.slug }))
}

export default async function ProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const targetId = id === "3-mini-metamorfoza-lucenec-2026" ? "mini-metamorphosis-slovensko" : id
  const product = productsData.find((p) => p.slug === targetId || p.id === targetId || p.slug === id)

  if (!product) notFound()

  return <ProgramDetailView product={product} />
}
