import React from "react";
import Image from "next/image";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      market_cap_rank: 1,
      thumb: "/assets/logo.svg",
      large: "/assets/logo.svg",
      data: {
        price: 98000.52,
        price_change_percentage_24h: {
          usd: 2.5,
        },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      market_cap_rank: 2,
      thumb: "/assets/logo.svg",
      large: "/assets/logo.svg",
      data: {
        price: 3450.12,
        price_change_percentage_24h: {
          usd: -1.2,
        },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      market_cap_rank: 5,
      thumb: "/assets/logo.svg",
      large: "/assets/logo.svg",
      data: {
        price: 245.89,
        price_change_percentage_24h: {
          usd: 5.7,
        },
      },
    },
  },
];

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: "Coin",
    cellClassName: "name-cell",
    cell: (coin: TrendingCoin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`} className="flex items-center gap-2">
          <Image src={item.large} alt={item.name} width={36} height={36} className="rounded-full" />
          <p className="font-semibold">{item.name}</p>
          <span className="text-xs text-gray-400 uppercase">{item.symbol}</span>
        </Link>
      );
    },
  },
  {
    header: "24h Change",
    cell: (coin: TrendingCoin) => {
      const item = coin.item;
      const change = item.data.price_change_percentage_24h.usd;
      const isTrendingUp = change > 0;

      return (
        <div
          className={cn(
            "flex items-center gap-1",
            isTrendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          {isTrendingUp ? (
            <TrendingUp height={16} width={16} />
          ) : (
            <TrendingDown height={16} width={16} />
          )}
          <p className="font-medium">{Math.abs(change).toFixed(2)}%</p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: (coin: TrendingCoin) => {
      const data = coin.item.data;

      return <p className="font-bold">${data.price.toLocaleString()}</p>;
    },
  },
];

const Page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={56}
              height={56}
            />
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1>$98,000.52</h1>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Trending Coins</h2>
          <DataTable
            tableClassName="trending-coins-table"
            columns={columns}
            data={dummyTrendingCoins}
            rowKey={coin => coin.item.id}
          />
        </div>

        <section className="w-full mt-7 space-y-4">
          <p className="text-xl font-bold">Categories</p>
          {/* Categories content would go here */}
        </section>
      </section>
    </main>
  );
};

export default Page;
