import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ title, number, image }) => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);
    var intervalTime = 80;
    if (number > 100) {
        intervalTime = 5;
    }
    useEffect(() => {
        let interval;
        if (isVisible) {
            interval = setInterval(() => {
                setCounter((prevCounter) => {
                    if (prevCounter < number) {
                        return prevCounter + 1;
                    } else {
                        clearInterval(interval);
                        return prevCounter;
                    }
                });
            }, intervalTime);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isVisible]);

    return (
        <div className='w-full md:w-1/6 flex flex-row justify-center md:justify-center items-center'>
            <img src={image} alt="" className='w-8 h-8 mx-4' />
            <div className="flex flex-col items-center justify-center w-4/5" ref={counterRef}>
                <p className="text-5xl font-bold">
                    {counter}
                </p>
                <p>
                    {title}
                </p>
            </div>

        </div>
    );
};

export default Counter;
