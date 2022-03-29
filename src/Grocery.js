import { Component } from "react";
import glocery from "./Listhome.jpg"
import check from './check.png'


export class Grocery extends Component {
    state = {
        userInput: "",
        grocery: []
        }

        onChangeEvent(e) {
            this.setState({userInput:e});
        }

        addItem(input){

            if (input===''){
                alert ("Please enter an item")
            }
            else {
            
            let listArray=this.state.grocery;
            listArray.push(input);
            this.setState({grocery:listArray,userInput:""})
        }
    }

        crossWord(event){
            const li= event.target;
            li.classList.toggle ('crossed');
        }
        onFormSubmit(e) {
            e.preventDefault();
        }

        deleteItem(){
            let listArray=this.state.grocery;
            listArray.length=0;
            this.setState({glocery:listArray})
        }

        render() {
            return(
                <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <img src={glocery} width="400px" alt="pic"/>
                <div className="box">
                    <div className="app">
                        <input className="btn" type="text"
                        placeholder="What do you want to buy?" 
                        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                <div className="btn">
                <button className="add" onClick = {()=>this.addItem (this.state.userInput)}> Add </button>
                </div>
                <ul>
                    {this.state.grocery.map((item, index)=>(
                        <li onClick={this.crossWord} key={index}><img src={check} width="40px" alt="check"/>{item}</li>
                        ))}
                </ul>
                <div className="btn">
                <button className="delete" onClick={()=>this.deleteItem()}>Delete</button>
                </div> 
                </div>
                </div>
                </form>
                </div>
            )
        }
    
}