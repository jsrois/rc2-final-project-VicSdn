import  { useState, useEffect } from "react";

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const startDate = new Date();
        const endDate = new Date("June 14, 2024");
        const difference = +endDate - +startDate;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Handle expired case gracefully
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className="text-center text-sm md:text-base">
            {Object.keys(timeLeft).length === 0 ? (
                <div className="text-green-500 font-bold">¡Ya ha comenzado!</div>
            ) : (
                <div>
                    <div className="text-orange-500 font-bold">Solo faltan...</div>
                    <div className="text-gray-600 font-bold">
                        {timeLeft.days} días, {timeLeft.hours} hrs {timeLeft.minutes} min
                    </div>
                    <div className="text-black text-xs md:text-sm font-bold">14 de junio</div>
                </div>
            )}
        </div>
    );
}

export default Countdown;
