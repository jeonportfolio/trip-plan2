import { ReactNode, useState } from "react";
import cn from 'classnames';

type Tab = {
    title: string;
    content: () => ReactNode;
}


interface Props {
    className?: string;
    tabs : Tab[];
}
export default function Tabs({ tabs,className }: Props) {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className={cn("flex", className)}>
            <TabButtonsList 
                steps={tabs} 
                currentStep={currentTab} 
                onChangeStep={setCurrentTab}
            />
            {tabs[currentTab].content()}
        </div>
    )
}

function TabButtonsList ({ 
        steps, 
        currentStep, 
        onChangeStep,
    }: {
        steps: Tab[], 
        currentStep: number, 
        onChangeStep: (index: number) => void,
    }) {

    return (
        <div className='flex flex-col justify-between items-center py-50 px-20 w-140'>
        <ul className=" flex flex-col">
            {steps.map((step, index) => {
                const active = index === currentStep;

                return (
                    <li 
                        key={index} 
                        className= {cn("py-15 px-24 text-16 tracking-[0.16px] first:rounded-t-6 last:rounded-b-6 ",{ 
                         "text-white bg-black font-medium": active, 
                            "text-black bg-bg": !active,
                        })}
                    >
                        <button onClick={() => onChangeStep(index)}>
                        {step.title}
                        </button>
                    </li>
                )
            })}
        </ul>
      
        
        </div>
    )
}
