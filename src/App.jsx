import { useEffect, useState } from "react"
import './app.css'
function App() {
    const [enabled, setEnable] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const text = enabled ? "Desactivar seguir puntero" : "Seguir puntero"
    useEffect(() => {
        function handleMove(event) {
            const {clientX, clientY} = event;
            setPosition({x: clientX, y: clientY})
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }
        return () => {
            setPosition({x: 0, y: 0})
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled])
    return (
        <>
            <div className="followMouse" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
            <h1>Hello World</h1>
            <button onClick={() => setEnable(!enabled)}>
                {text}
            </button>
        </>
    )
}
export { App }