import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            편안한 공항 이동,<br />
            공항 모빌리티가 함께합니다
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            휠체어형 안내 로봇으로 공항 내 이동이 더욱 편리해집니다.
            지금 바로 예약하고 이용해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/reservations/new">
                지금 예약하기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/guide/robot-usage">이용 방법 보기</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/hero-robot.webp"
            alt="공항 모빌리티 로봇"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
} 