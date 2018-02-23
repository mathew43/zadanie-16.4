import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../containers/Title';
import TodoList from './TodoList';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'clean room'
      }, {
        id: 2,
        text: 'wash the dishes'
      }, {
        id: 3,
        text: 'feed my cat'
      }]
      };
    }

addTodo(val){
  const todo = {
    text: val,
    id: uuid.v4(),
  };
  const data = [...this.state.data, todo];
  this.setState({data});
}

removeTodo(id){
  const remainder = this.state.data.filter(todo => todo.id !== id);
  this.setState({data: remainder});
}

render() {
  const list = this.state.data.map((item) => {
    return(
        <li key={item.id}>
          <p>{item.text}</p>
        </li>
    )
  });

    return (
      <div className={style.TodoApp}>
        <Title title={this.state.appTitle}/>
        <TodoList list={this.state.data} onRemove={this.removeTodo.bind(this)}/>
      </div>
    );
}


}


export default App;
