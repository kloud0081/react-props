import './App.css';
import "./Style.css" 
import Name from "./Profile/FullName"
import A from "../src/img/A.png"

function App() {
 const user={fullName:"khaled",bio:"b",profession:"ingenieur electrique"}
  const handleName=(name)=> alert(`Hello ${name}`)
  
  return (
    <div className="App">
   <Name fullName={user.fullName} handleName={handleName}><img src={A}/> </Name>
           
 </div>
  );
}
export default App;
