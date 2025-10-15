import { Component } from "react";


class HijoNumero extends Component{

    seleccionarNumero=()=>{
      var num=  parseInt(this.props.numero);
      this.props.sumarNumeros(num);
    }

    render(){
        return(
            <div>
                <h3 style={{color:"red"}}>Numero:{this.props.numero} </h3>
                <button onClick={this.seleccionarNumero}> Sumar{this.props.numero}</button>
                
            </div>
        )
    }
}
export default HijoNumero;