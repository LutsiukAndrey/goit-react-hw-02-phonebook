import React from "react";


const onChange = ({value, onChange})=>{

// this.props.onInput( event.currentTarget.value)


        return(
            <form action="input">

                <input type="text" 
                value={value} onChange ={onChange}
     />
            </form>
        )
    
}
export default onChange