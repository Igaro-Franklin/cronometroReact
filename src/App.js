
import React, {Component} from "react";
import './style.css'

class App extends Component{

    constructor(props){
      super(props);
      this.state ={
        numero: 0,
        botao:'Iniciar'
      }

      this.timer = null;
      this.iniciar = this.iniciar.bind(this);
      this.zerar = this.zerar.bind(this);

    }

iniciar(){

  let state = this.state

  if(this.timer !== null){
    clearInterval(this.timer);
    this.timer = null;
    state.botao = 'Iniciar';
  }else{
    this.timer = setInterval(() => {
      let state = this.state;
      state.numero += 0.01;
      this.setState(state);
    }, 10);
    state.botao = 'Pausar';
  }

  this.setState(state);
}

zerar(){
  if(this.timer !== null){
    clearInterval(this.timer);
    this.timer = null;
  }

  let state = this.state;
  state.numero = 0;
  state.botao = 'Iniciar';
  this.setState(state);
}


  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>
        <p className="timer">{this.state.numero.toFixed(2)}</p>
        <div className="areaBtn"> 
          <p className="botao" onClick={this.iniciar}>{this.state.botao}</p>
          <p className="botao" onClick={this.zerar}>Zerar</p>
        </div>
      </div>
    )
  }
}


export default App;
