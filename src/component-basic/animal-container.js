import React from 'react';
import ReactDOM from 'react-dom';

function Cat() {
    return <div>π±</div>
}
// ν¨μ ννμμ ν΅ν΄μ μ»΄ν¬λνΈ μ μ κ°λ₯
const Dog = function () {
    return <div>πΆ</div>
}
// νμ΄ν ν¨μλ‘ μ»΄ν¬λνΈ μ μ κ°λ₯
const Pig = () => <div>π·</div>
function AnimalContainer() {
    return (
        /* μΌλ°μ μΈ νκ·Έ μ¬μ© κ°λ₯ */
        <div style={{ fontSize: "100px" }}>
            {/* μ΄λ―Έ μ μν μ»΄ν¬λνΈλ€λ JSX λ΄λΆμμ μ¬μ© κ°λ₯ */}
            <Cat />
            <Dog />
            <Pig />
        </div>
    )
}
ReactDOM.render(<AnimalContainer />, document.getElementById("root"))
