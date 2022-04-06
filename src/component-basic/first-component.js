import React from 'react';
import ReactDOM from 'react-dom';
function FirstComponent() {
    // JSX를 이용하여 컴포넌트에서 보여줄 내용을 작성하고 반환
    return <div>My First Component!</div>
}
function HelloWorld() {
    return <h1>Hello, world</h1>
}
ReactDOM.render( // 컴포넌트 두개를 반환하고싶을때 이런 방법으로
    <div>
        <FirstComponent/>  
        <HelloWorld/>
    </div>,document.getElementById('root'))