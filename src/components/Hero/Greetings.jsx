import React, { useState, useEffect } from 'react';
import './Greetings.css';

function Greetings() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const updateTime = () => {
        const hour = new Date().getHours();
        setGreeting(hour >= 5 && hour < 18 ? "Buongiorno! " : "Buonasera! ");
    };

    return (
        <span className="greetings">{greeting}</span>
    );
}

export default Greetings;
