import { useEffect, useState } from "react";

const CounterF = ({ step = 1 }) => {
    console.log("CounterF: Render");
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000)
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        console.log("Component Did Update");
    }, [count])

    const handleClick = () => setCount((prev) => prev + step);
    const handleDecrement = () => setCount((prev) => prev -  step);
    return (
        <>
            {
                loading ? <h1>Loading...</h1> : 
            <>
            <button onClick={handleDecrement}>Decrementer</button>
            <p>Count = {count}</p>
            <button onClick={handleClick}>Incrementer</button>
        </>
            }
        </>
    );
};
export default CounterF;
