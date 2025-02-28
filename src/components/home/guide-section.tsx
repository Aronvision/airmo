import { Button } from "@/components/ui/button"
import { Steps } from "@/components/ui/steps"
import Link from "next/link"

const steps = [
  {
    title: "1. 예약하기",
    description: "원하는 날짜와 시간을 선택하여 예약합니다",
  },
  {
    title: "2. QR코드 스캔",
    description: "예약된 시간에 로봇에서 QR코드를 스캔합니다",
  },
  {
    title: "3. 안전하게 이동",
    description: "목적지까지 안전하게 이동합니다",
  },
]

export function GuideSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          이용 방법
        </h2>
        <Steps steps={steps} className="max-w-3xl mx-auto mb-12" />
        <div className="text-center">
          <Button asChild>
            <Link href="/guide/robot-usage">
              자세한 이용 방법 보기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 