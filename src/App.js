import React , {Component} from "react";
import Showitems from "./Component/Todoitems/Todoitems";
import AddItem from "./Component/Additems/Additems";
class App extends Component{
  state = {
    myArr : [
      {id : 1 , name : "HTML" , describution : "This is HTML Task"} ,
      {id : 2 , name : "CSS" , describution : "This is Css Task"} ,
    ]
  }
  deleteItem = (e) =>{
    const newArr = this.state.myArr.filter((item) =>{
      return item.id !== e;
    })
    this.setState({myArr:newArr});
  }
  addItem =(item) =>{
    item.id = Math.random();
    let finalArr = this.state.myArr;
    finalArr.push(item);
    this.setState({myArr : finalArr});
  }
  render(){
    return(
      <div className=" mx-auto bg-[#262626] w-3/4 p-5 pb-10 mt-10 rounded-2xl">
       <p className=" text-white text-center text-2xl font-bold">Todo App</p>
        <AddItem appState = {this.addItem} />
        <Showitems proShowo = {this.state.myArr} prpDeleteItem = {this.deleteItem}/>
      </div>
    )
  }
}
export default App;