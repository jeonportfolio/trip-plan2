import { useRef } from "react";

export default function RegisterCity() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const RegisterCity = async () => {
        const city = textareaRef.current?.value;

        if(!city){
            return;
        }

        const response = await fetch('/api/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: city,
        })

        if (response.ok) {
            textareaRef.current!.value = '';
            alert('City success');
        } else {
            alert('City failed');
        }
    }

    return (
        <div>
            <div>
                <textarea ref = {textareaRef}></textarea>
            </div>
            <button onClick={RegisterCity}>등록</button>
        </div>
    )
}