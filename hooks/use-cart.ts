"use client"

import { useContext } from "react"
import { CartContext } from "@/app/providers"

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a Providers component")
  }
  return context
}
