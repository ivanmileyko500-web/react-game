import { useState } from "react";
import App from "./App";
import AppEnter from "./AppEnter";

export default function AppRouter() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    return (
        <>
            {isGameStarted ? (
                <App />
            ) : (
                <AppEnter onEnter={() => setIsGameStarted(true)} />
            )}
        </>
    );
}