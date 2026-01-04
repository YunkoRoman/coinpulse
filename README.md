# Coinpulse

Powered by the CoinGecko API REST endpoints and crypto WebSocket API to stream real-time, sub-second, ultra-low latency market data – giving everyone the ability to build industry-leading, data-driven crypto and Web3 projects.

## 🚀 Features

- **Real-time Market Data**: Stream live cryptocurrency prices and market stats with ultra-low latency via WebSockets.
- **Interactive Charts**: High-performance financial charts powered by `lightweight-charts`.
- **Comprehensive Data**: Access extensive crypto data through CoinGecko API REST endpoints.
- **Modern UI**: Sleek, responsive design built with Tailwind CSS 4 and Lucide icons.
- **Performance First**: Built with Next.js 16 and React 19 for optimal speed and SEO.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Lightweight Charts](https://ru.tradingview.com/lightweight-charts/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/coinpulse.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file and add your API keys:

   ```env
   NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `public/`: Static assets.

## 📜 License

This project is licensed under the MIT License.
