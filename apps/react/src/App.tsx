import { useState } from "react"
import "./styles.css"

function App() {
    const [data, setData] = useState<number[]>([])
    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            <button
                onClick={() => {
                    setData((prev) => {
                        if (prev.length < 3) {
                            return [...prev, prev.length + 1]
                        }

                        const newData = [...prev].reverse()
                        return newData
                    })
                }}
            >
                Add
            </button>
        </div>
    )
}

export default App
