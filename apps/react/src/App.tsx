import { useState } from "react"
import "./styles.css"

function App() {
    const [data, setData] = useState<number[]>([])
    return (
        <div>
            <ul>
                {data.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>

            <button
                onClick={() => {
                    setData((prev) => {
                        if (prev.length < 4) {
                            return [...prev, prev.length + 1]
                        }

                        const newData = [...prev]
                        newData.pop()

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
