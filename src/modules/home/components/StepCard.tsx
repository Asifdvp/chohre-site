import React from 'react'

interface StepCardProps {
  step: number
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
  return (
    <div className="bg-background rounded-lg relative pt-19 pb-5 overflow-hidden">
      {/* Step Number Circle */}
      <div className="absolute -top-6 -left-4">
        <div className="p-4 w-23 h-23 rounded-full bg-white flex items-end justify-center">
          <span className="text-2xl leading-8 font-bold text-primary">
            0{step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 md:px-5">
        <h4 className="text-base leading-6 font-medium text-gray mb-1">{title}</h4>
        <p className="text-text text-sm leading-5 font-normal">{description}</p>
      </div>
    </div>
  )
}

export default StepCard
