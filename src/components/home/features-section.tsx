import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Map, Shield } from "lucide-react"

const features = [
  {
    title: "간편한 예약",
    description: "웹에서 쉽고 빠르게 예약하고 이용하세요",
    icon: Calendar,
  },
  {
    title: "실시간 경로 안내",
    description: "공항 내 최적 경로를 안내해드립니다",
    icon: Map,
  },
  {
    title: "안전한 이동",
    description: "첨단 센서로 안전한 이동을 보장합니다",
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        주요 기능
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 