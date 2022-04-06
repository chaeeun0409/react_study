import React from 'react';
import ReactDOM from 'react-dom';


function Greeting({name,age,job,like}){
    return <h1>Hello,{name}{age}{job}{like}</h1>
}
ReactDOM.render(<Greeting name = "김미림, "age={20} job=", 학생,"like=" 운동"/>, document.getElementById('root'))

/*
구조분해 할당
const user = {name : "John",age:20};
const {name,age} = user;
const {name:n,age} = user;

function func(user){
    let name = user.name;
    let age = user.age;

}

*/