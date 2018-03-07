import React from 'react';

export default class Todo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tekst: "napis"


      };
}
  addItem(itemId){
    this.props.onAdd(itemId);
  }
render(){

return(

<div>
<button onClick={ () => this.addItem(this.state.tekst) }>Dodaj</button>
<input value={this.state.tekst} onChange={ (e) => this.setState({tekst: e.target.value})}/>
</div>
)

}


}
