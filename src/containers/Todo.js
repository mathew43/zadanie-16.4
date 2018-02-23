import React from 'react';

export default class Todo extends React.Component{

  addItem(itemId){
    this.props.onAdd(itemId);
  }
render(){

return(

<button onClick={ () => this.addItem( item.id ) }>Dodaj</button>

)

}


}
