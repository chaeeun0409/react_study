import React,{useState} from 'reatc'
import ReactDOM from 'react-dom'

const number = [1,2,3,4,5]
const listItems = number.map((number)=> <li>{number}</li>)




ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'))
