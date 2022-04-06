import ReactDOM from 'react-dom'


function SlotMachine(props){
    const{s1,s2,s3} = props
    return (
        <div></div>
    )
        
}

ReactDOM.render(
    <div>
        <SlotMachine s1="x" s2="y" s3="z"></SlotMachine>
        <SlotMachine s1="x" s2="y" s3="z"></SlotMachine>
        <SlotMachine s1="x" s2="y" s3="z"></SlotMachine>
        <SlotMachine s1="x" s2="y" s3="z"></SlotMachine>

    </div>
)
const Userprofile = props =>{
    const [userName, setUserName] = useState("이무계")
    const [userAge, setUserAge] = usertate(0)
    const [emailAdress, setemailAdress] = userState(null)
    
    return  (
        <div>{userName}{userAge}{emailAdress}</div>
    )
}
ReactDOM.render(<Userprofile/>,document.getElementById("root"));