"use client"

import { Card, CardContent } from "@/components/ui/card"

const cryptoCards = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$43,567.89",
    change: "+2.34%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,345.67",
    change: "+1.23%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: "$134.56",
    change: "+5.67%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.56",
    change: "-0.78%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Polkadot",
    symbol: "DOT",
    price: "$6.78",
    change: "+0.45%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Ripple",
    symbol: "XRP",
    price: "$0.67",
    change: "-1.23%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$34.56",
    change: "+3.45%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    name: "Chainlink",
    symbol: "LINK",
    price: "$14.56",
    change: "+2.34%",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CryptoDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium shadow-md">
        Welcome to the Crypto Dashboard — prices shown are for illustrative purposes only.
      </div>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
            Crypto Dashboard
          </h1>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cryptoCards.map((card) => (
            <Card
              key={card.id}
              className="bg-slate-800/40 border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mr-3">
                      <img src={card.image || "/placeholder.svg"} alt={card.name} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold">{card.name}</h3>
                      <p className="text-sm text-slate-400">{card.symbol}</p>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium ${card.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}
                  >
                    {card.change}
                  </div>
                </div>
                <div className="text-2xl font-bold">{card.price}</div>
                <div className="mt-4 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>

      {/* Circuit Board Pattern Background */}
      <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTQuMDEgNDkuOTlINDIuMDFWNTRoLTQuMDJWMzZoNC4wMnY0aDEyVjE2aC0xMnY0aC00LjAyVjZoNC4wMnY0LjAxaDEyVjBoLTE2djYuMDFoLTQuMDJWMGgtMTZ2MTBoMTJ2NGgtNHYxNmg0di00aDEydjI0aC0xMnYtNGgtNHYxMGgxNnYtNi4wMWg0LjAyVjYwaDE2VjQ5Ljk5ek0zMC4wMSAyNmgtMTJWMTBoMTJ2MTZ6Ij48L3BhdGg+PC9zdmc+')] bg-repeat opacity-10"></div>
      </div>
    </div>
  )
}
