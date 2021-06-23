import PropTypes from "prop-types"
function  Name ({fullName,handleName,children}){
    return (<div className="button">
        {children}
        <button style={{borderRadius:" 15%"}} onClick={()=>handleName(fullName)} >profile</button>
    </div>)
}
 Name.defaultProps={
     fullName:"khaled"
 }
 Name.propTypes={
     fullName:PropTypes.string.isRequired
 }
export default Name