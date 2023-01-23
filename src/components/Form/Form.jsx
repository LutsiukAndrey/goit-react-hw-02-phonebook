import { nanoid } from "nanoid";
import { Component } from "react";


export class Form extends Component{
    state = {
 
        name: '',
        number:'',
      }
      onHandleChange=(event)=>{
        const{name, value} = event.currentTarget
    
        this.setState({[name]:value, id:nanoid()})
      }
      
      onSubmit =event=>{
    event.preventDefault()
this.props.onSubmit(this.state)
    this.reset()
      }
      reset=()=>{
        this.setState({name:'', number:""})
      }
      render(){
        return(
            <div> 
          <form onSubmit={this.onSubmit}>
            <p>Name</p>
          <input
          onChange={this.onHandleChange}
          value = {this.state.name}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <p>Number</p>
    <input
          value = {this.state.number}
    
    onChange={this.onHandleChange}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    
    <div>
    <button type="submit">Add Contact</button>
    
    </div>
          </form></div>
        )
      }

}