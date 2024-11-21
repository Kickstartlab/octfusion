import React from "react";


const Particle = () => {
    const circles = [
        { id: 1, delay: "0s", left: "5%", size: 10, speed: "1s" },
        { id: 2, delay: "1s", left: "50%", size: 20, speed: "3s" },
        { id: 3, delay: "2s", left: "40%", size: 25, speed: "5s" },
        { id: 4, delay: "2s", left: "60%", size: 15, speed: "9s" },
        { id: 5, delay: "2s", left: "25%", size: 25, speed: "6s" },
        { id: 6, delay: "2s", left: "75%", size: 8, speed: "7s" },
        { id: 7, delay: "2s", left: "90%", size: 22, speed: "4s" },
        { id: 8, delay: "0s", left: "80%", size: 13, speed: "8s" },
    ];

    return (
        <div className="container">
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className="circle"
                    style={{
                        animationDelay: circle.delay,
                        animationDelay: circle.speed,
                        left: circle.left,
                        width: circle.size,
                        height: circle.size,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Particle;
