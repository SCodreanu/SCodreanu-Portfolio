import { useState, useEffect } from 'react';
import './Greetings.css';

function Greetings() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const hour = new Date().getHours();
            setGreeting(hour >= 5 && hour < 18 ? "Buongiorno! " : "Buonasera! ");
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="greetings">{greeting}</span>
    );
}

export default Greetings;
