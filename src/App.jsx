import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import CounterC from "./CounterC";
import CounterF from "./CounterF";
import Pokemon from "./Pokemon";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const [name, setName] = useState("Mohamed");
    const handleClick = () => setCount((count) => count + 1);

    return (
        <>
            <Header name={name} />

            <CounterC counter={10} />
            <input type="number" value={step} onChange={
                (e) => setStep(e.target.value)
            } />
            <CounterF step={step}  />
            <Pokemon />
        </>
    );
}

export default App;
