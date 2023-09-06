import { useState } from "react"
import "./styles.css"

function App() {
    const [data, setData] = useState<number[]>([])
    return (
        <div>
            {data.map((item) => {
                return <p key={item}>{item}</p>
            })}

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
