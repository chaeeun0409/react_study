import React from 'react';
import  ReactDOM  from 'react-dom';

const name = 'Josh Perez'
const element = <h1>Hello,{name}</h1>
const lst =[100,200,300]
const person={
    name : 'john',
    age:20
}
function double(value){
    return value * 2
}
const JSXwithExpressions = (
    <h1>
        {/*jsx 주석*/}
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)
ReactDOM.render(JSXwithExpressions,document.getElementById('root'))