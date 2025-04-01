import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function RegisterPlace() {
    const [searchParams] = useSearchParams();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const RegisterCity = async () => {
        const city = searchParams.get('city');
        const place = textareaRef.current?.value;

        if(!place || !city){
            return;
        }

        const response = await fetch(`/api/cities/${city}/places`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: place,
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
            <button onClick={RegisterCity}>등록</button>
        </div>
    )
}