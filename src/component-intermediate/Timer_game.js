import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ClickGame = function (props) {
    const [clickCount, setClickCount] = useState(0)
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })

    useEffect(() => {
        console.log('setInterval');
        const id = setInterval(() => {
            setTimerState(prevState => {
                console.log('from setInterval', id)
                if (prevState.time === 1) {
                    console.log('clearInterval (by timeout)')
                    clearInterval(id)
                    return { ...prevState, timeout: true, time: prevState.time - 1 }
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            console.log('clearInterval (by unmount)', id)
            clearInterval(id)
        }
    }, [])

    const btnStyle = { width: "100px", height: "100px", border: "0px", borderRadius: "50%", background: "red", color: "white", fontSize: "24px", fontWeight: "bold" }
    if (timerState.time === 0) btnStyle.background = "gray";
    return (
        <div>
            {timerState.timeout ? <h1 style={{ color: "red" }}>끝</h1> : <h1>남은 시간 ({timerState.time}초)</h1>}
            <div>
                <h1>클릭 횟수 : {clickCount}</h1>
                <button style={btnStyle} onClick={() => {
                    if (timerState.time > 0) setClickCount(c => c + 1)
                }}>클릭</button><br />
            </div>
        </div>
    )
}

ReactDOM.render(<ClickGame time={4} />, document.getElementById("root"))