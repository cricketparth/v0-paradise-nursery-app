"use client"

import { Header } from "./header"
import { ProductCard } from "./product-card"

const plants = [
  // Succulents
  {
    category: "Succulents",
    items: [
      { id: "1", name: "Jade Plant", price: 24.99, image: "/jade-plant-succulent.jpg" },
      { id: "2", name: "Echeveria", price: 19.99, image: "/echeveria-succulent.png" },
    ],
  },
  // Tropical
  {
    category: "Tropical Plants",
    items: [
      { id: "3", name: "Monstera Deliciosa", price: 45.99, image: "/monstera-deliciosa-tropical-plant.jpg" },
      { id: "4", name: "Bird of Paradise", price: 52.99, image: "/bird-of-paradise-plant.jpg" },
    ],
  },
  // Foliage
  {
    category: "Foliage Plants",
    items: [
      { id: "5", name: "Pothos Golden", price: 22.99, image: "/golden-pothos-foliage-plant.jpg" },
      { id: "6", name: "Fiddle Leaf Fig", price: 59.99, image: "/fiddle-leaf-fig.png" },
    ],
  },
]

export function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-12 text-balance">Our Plant Collection</h1>

          {plants.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((plant) => (
                  <ProductCard key={plant.id} id={plant.id} name={plant.name} price={plant.price} image={plant.image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
