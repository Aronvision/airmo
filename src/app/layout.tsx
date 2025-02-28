import { Inter } from "next/font/google"
import "./globals.css"
import { RootLayout } from "@/components/layout/root-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "공항 모빌리티 서비스",
  description: "편안한 공항 이동, 공항 모빌리티가 함께합니다",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
} 