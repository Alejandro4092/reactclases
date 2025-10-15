import { Component } from "react";
import HijoNumero from "./HijoNumero";
//Realizar una práctica en la que tendremos dos components Padre/Hijo 
//En el componente padre debemos cargar, al inicio, múltiples números aleatorios 
//Dichos números aleatorios serán dibujados mediante un componente hijo al  
//Que enviaremos el valor del número aleatorio. 
//Tendremos la posibilidad, en el Padre de generar un nuevo número aleatorio al  
//Pulsar sobre un botón. En el componente Hijo, tendremos un botón llamado Sumar número que, al pulsar,  
//Realizará una Suma en el padre. Cada vez que vayamos pulsando un "Hijo", iremos sumando en el Padre. 
//Los componentes se llamarán PadreNumeros.js e HijoNumero.js 


class PadreNumeros extends Component {

    state={
        suma:0, 
        numerosAleatorios:[4,6]
    }
   //
   sumarNumeros=(numero)=>{
    console.log("Sumando en el padre"+numero);
    this.setState({
        suma: this.state.suma + numero
    })

   }


    generarNumeroAleatorio=()=>{
        var numero=parseInt(Math.random()*500)+1;
        this.state.numerosAleatorios.push(numero);
        console.log(this.state.numerosAleatorios);
        this.setState({
            numerosAleatorios: this.state.numerosAleatorios
        });
    }

  

    render() {
        return (
            <div>
                <h1>Padre Numeros</h1>
                <h3 style={{backgroundColor:"yellow"}}>La suma es: {this.state.suma}</h3>
                <button onClick={this.generarNumeroAleatorio}>Generar nuevo numero</button>
                {
                 this.state.numerosAleatorios.map((numeros,index) => {
                        return(<HijoNumero key={index} numero={numeros} sumarNumeros={this.sumarNumeros} />)
                    })
                }

            </div>
        )
    }
}
export default PadreNumeros;