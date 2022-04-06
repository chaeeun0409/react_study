import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import ReactDOM from 'react-dom';

const div = <div>
    @
    {true}
    {false}
    {undefined}
    {null}
    @
</div>
const unreadMessage = [];
const div2 = <div>
    <h1>Hello!</h1>
    {/*만약 읽지 않은 메세지가 있다면 경고문을 출력 */}
    {
        unreadMessage.length > 0 &&
        <h2>You have {unreadMessage.length} unread massage.</h2>
    }
    {
        unreadMessage.length > 0 ?
        <h2>You have {unreadMessage.length} unread massage.</h2> : null
    }
</div>

function conditionalRender(age){
    if(age>=20){
        return <div>성인</div>
    } else{
        return <div>미성년자</div>
    }
}
const div3 = <div>
    {conditionalRender(10)}
</div>
const age = 20
const div4 = (
    <>{age>=20 ? <div>성인</div> : <div>미성년자</div>}</>
)
const myStyle = {color : "red", backgroundColor:"lightblue"};
const h1 = <h1 style={myStyle}>Hello Style</h1>
ReactDOM.render(h1, document.getElementById('root'))