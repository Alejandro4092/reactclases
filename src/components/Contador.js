import { Component } from "react";
function metodoAbsurdo(){
    console.log("metodo sin funcionalidad");
}
class Contador extends Component {



    //las variables se declaran a nivel de clase no se utilizan palabras como var, let o const
    contador = 1;
    //con los metodos suceden exactamente lo mismo,solo la declaracion
    incrementarNumero=()=>{
        //PARA ACCEDER A LAS VARIABLES DE CLASE , DEBEMOS USAR LA PALABRA THIS
        this.numero+= 1;
        console.log("Valor de número" +this.numero);
    }
    state={
        valor: parseInt(this.props.inicio)
    }
    incrementarValor=()=>{
        this.setState({
            valor:this.state.valor + 1
        })
    }
    
    //La sintaxis del codigo html a cambiado

    render() {

        return (
            <div>
                <h1 style={{color:"blue"}}>Ejemplo Contador JSX:{this.props.inicio}

                </h1>
                <h3 style={{color:"red"}}>Valor:{this.state.valor}</h3>

                {/* LA LLAMADA A LOS ETODOS SE REALIZA CON THIS Y NO SE UTILIZA NI LAMBDA NI PARENTESIS */}
                <button onClick={this.incrementarValor}>Contador</button>
                <button onClick={this.incrementarNumero}>Incrementar número</button>
                {/* tenemos multiples formas de realizar llamadas */}
                <button onClick={()=>{  
                    metodoAbsurdo();
                    this.incrementarNumero();
                }}>Boton absurdo</button>

            </div>



        )
    }

}
export default Contador;