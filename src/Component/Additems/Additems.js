import React , {Component} from "react";
import "./Additems.css";
class AddItem extends Component{
    state = {
    name : "",
    describution : ""
    }
    Handelchange = (e) =>{
       console.log(e.target.value);
       this.setState({
       [e.target.id] : e.target.value ,
    });
    }
    funcAdd = (e) =>{
        e.preventDefault();
        this.props.appState(this.state);
        //to empaty inputs after add value
        this.setState({
            name : "",
            describution : "",
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.funcAdd} className=" bg-[#404040] my-5 flex justify-between 
                mx-auto w-5/6 p-5 items-center">
                    <div className="flex flex-col lg:flex-row  items-start">
                        <div className="mx-3">
                        <p className="text-white ml-2 ">Task Name</p>
                        <input className="input-style" type="text" onChange={this.Handelchange}
                        id="name" value={this.state.name} ></input>
                        </div>
                        <div className="mx-3">
                        <p className="text-white ml-2">Describution</p>
                        <input className="input-style" type="text"  onChange={this.Handelchange} 
                        id ="describution" value={this.state.describution} ></input>
                        </div>
                    </div>
                    
                    <button className=" bg-orange-400 rounded-md text-white 
                    flex justify-center items-center p-2 px-3 text-sm">Add Task</button> 
                </form>
            
            </div>
        )
    }
}
export default AddItem;