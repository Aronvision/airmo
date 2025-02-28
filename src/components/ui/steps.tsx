interface Step {
  title: string
  description: string
}

interface StepsProps {
  steps: Step[]
  className?: string
}

export function Steps({ steps, className = "" }: StepsProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-4">
          <div className="flex-none">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
              {index + 1}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 