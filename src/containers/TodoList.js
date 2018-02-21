import React from 'react';

export default class TodoList extends React.Component{
    

  removeItem(itemId){
    this.props.onRemove(itemId);
  }

  render(){

    console.log(this.props);
    return(
      <div>
        <ul>
        {
          this.props.list.map((item) => <li key={item.id}>{item.text} <button onClick={ () => this.removeItem( item.id ) }>Usuń</button></li>)
        }
        </ul>
        <p>Ilość zadań: {this.props.list.length}</p>
      </div>
    )
  }
}


