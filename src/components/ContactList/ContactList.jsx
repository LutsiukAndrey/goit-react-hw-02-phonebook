
import { Component } from "react"
export class ContactList extends Component {
    
    onDellateBtn= event => {
        this.props.delateContact(event.currentTarget.id)
     

    }
    render(){

        
    if(this.props.data.length >0){
        return(
   <ul>
    {this.props.data.map(({id,name,number})=>{
        return (
            <li key={id}>{name} : {number}
            <button id={id} type="button" onClick={this.onDellateBtn}>delate</button></li>
        )
    })}
   </ul>
        
        
        
        
        )
    }
    
}
}