'use client'
import { useEffect, useState } from 'react';

export default function Home() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:5001/api/sse');
        
        eventSource.onmessage = (event) => {
            console.log(event)
            setTime(event.data);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Server-Sent Events Demo</h1>
            <p>Message: {time}</p>
        </div>
    );
}
