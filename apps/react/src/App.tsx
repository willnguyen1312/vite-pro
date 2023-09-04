import "./styles.css"

const boxes: any[][] = new Array(15).fill(new Array(8).fill(null))

function App() {
    return (
        <table
            style={{
                width: 800,
                height: 500,
                position: "relative",
            }}
        >
            <tbody>
                {boxes.map((row, i) => {
                    return (
                        <tr key={i}>
                            {row.map((_, j) => (
                                <td key={j}>
                                    {Math.abs(i - 14)}:
                                    {Math.floor(8 / 2 - Math.abs(j - 7))}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default App
