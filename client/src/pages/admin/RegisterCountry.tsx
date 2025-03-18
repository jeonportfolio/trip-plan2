import { useRef } from "react";

export default function RegisterCountry() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const RegisterCountry = async () => {
        const country = textareaRef.current?.value;

        if(!country){
            return;
        }

        const response = await fetch('/api/countries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: country,
        })

        if (response.ok) {
            textareaRef.current!.value = '';
            alert('success');
        } else {
            alert('failed');
        }
    }

    return (
        <div>
            <div>
                <textarea ref = {textareaRef}></textarea>
            </div>
            <button onClick={RegisterCountry}>등록</button>
        </div>
    )
}