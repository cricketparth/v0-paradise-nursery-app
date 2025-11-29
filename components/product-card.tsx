"use client"

import { useState, useMemo } from "react"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { items, addToCart } = useCart()
  const isInCart = useMemo(() => items.some((item) => item.id === id), [items, id])
  const [isAdded, setIsAdded] = useState(isInCart)

  const handleAddToCart = () => {
    addToCart({ id, name, price, image })
    setIsAdded(true)
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative w-full h-48 bg-muted">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-primary font-bold text-xl mb-4">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
            isAdded
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}
