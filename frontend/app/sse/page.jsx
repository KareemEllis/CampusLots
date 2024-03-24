'use client'
import { useEffect, useState } from 'react';
import CircularGraph from './CircleGraph';

export default function Home() {
    const [val, setVal] = useState('');

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:5001/api/sse');
        
        eventSource.onmessage = (event) => {
            console.log(event)
            const eventData = JSON.parse(event.data)
            setVal(eventData.message);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Server-Sent Events Demo</h1>
            <p>Message: {val}</p>

            <CircularGraph maxValue={50} currentValue={val} />
        </div>
    );
}
