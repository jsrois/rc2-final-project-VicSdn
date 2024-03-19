import { useState, useEffect } from "react";

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function calculateTimeLeft() {
        const startDate = new Date();
        const endDate = new Date('June 14, 2024');
        const difference = +endDate - +startDate;
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    return (
        <div>
            {Object.keys(timeLeft).length === 0 ? (
                <div>¡Ya ha comenzado!</div>
            ) : (
                <div>
                        <div style={{ color: "#fc8802" , fontSize:"20px"}}>Solo faltan...</div>
                        <div style={{ color: "#8b95a6", fontSize: "22px", textShadow: "0 0 2px #000, 0 0 2px #000" }}>
                        {timeLeft.days} días, {timeLeft.hours} horas {timeLeft.minutes} min {timeLeft.seconds} seg
                    </div>
                        <div style={{ color: "#000000", fontSize: "16px" , textShadow:"0 0 2px #fc8802" }} >14 de junio</div>
                </div>
            )}
        </div>

    );
}

export default Countdown;

