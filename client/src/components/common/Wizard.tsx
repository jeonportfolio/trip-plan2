import { ReactNode, useState } from "react";
import Button from "./Button";
import cn from 'classnames';

type Step = {
    title: string;
    content: ({ onNext }: { onNext: () => void }) => ReactNode;
}


interface Props {
    steps: Step[];
}

export default function Wizard({ steps }: Props) {
    const [currentStep, setCurrentStep] = useState(0);

    const onNext = () => {
        setCurrentStep(prev => prev + 1);
    }

    return (
        <div className="flex">
            <Steps steps={steps} currentStep={currentStep} onChangeStep={setCurrentStep}/>
            {steps[currentStep].content({ onNext })}
        </div>
    )
}

function Steps ({ 
        steps, 
        currentStep, 
        onChangeStep
    }: {
        steps: Step[], 
        currentStep: number, 
        onChangeStep: (index: number) => void
    }) {

    return (
        <div className='flex flex-col justify-between items-center py-50 px-20 w-140'>
        <ul className="w-78 flex-col gap-y-30 ">
            {steps.map((step, index) => {
                const active = index === currentStep;

                return (
                    <li 
                        key={index} 
                        className= {cn("text-15 font-semibold leading-[1.5]",{ 
                         "text-main": active, 
                            "text-gray300": !active,
                        })}
                    >
                        <button onClick={() => onChangeStep(index)}>
                        STEP{index + 1}
                        <br/>
                        {step.title}
                        </button>
                    </li>
                )
            })}
        </ul>
        {currentStep < steps.length -1 && 
            <Button className="px-30" onClick={() => onChangeStep(currentStep + 1)}>
                다음
            </Button>}
        
        </div>
    )
}
