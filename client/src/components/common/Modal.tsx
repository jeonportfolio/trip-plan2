import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: PropsWithChildren) {
    return createPortal(<div className="fixed inset-0 w-full h-full">{children}</div>, 
    document.body
    );
}

export function ModalBackdrop () {
    return <div className="fixed inset-0 w-full h-full bg-[rgba(1,1,1,0.50)] -z-10"></div>
}

export function ModalPanel ({ children }: PropsWithChildren) {
    return <div className="fixed inset-0 flex items-center justify-center">    
    {children}
    </div>
}