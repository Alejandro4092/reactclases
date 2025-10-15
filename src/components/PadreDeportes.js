import { Component } from "react";
import HijoDeporte from "./HijoDeporte";
class PadreDeportes extends Component {
    deportes=["Futbol","Poker","Curling","Petanca"];
    //necesitamos variable state para visualizar el deporte favorito
    state={
        favorito:""
    }
    //Demebemos tener un metodo que sea invocado por el hijo al pulsar sobre el boton de seleccionar
    mostrarFavorito=(deporteSeleccionado)=>{
        this.setState({
            favorito:deporteSeleccionado
        })
    }
    render() {
        return (
            <div>
                <h1>Padre Deportes</h1>
                <h4 style={{backgroundColor:"lightgreen"}}>Su deporte favorito es: {this.state.favorito}</h4>
                
                {
                    this.deportes.map((deporte,index) => {
                        return(<HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>)
                    })


                }
            </div>
        )
    }
}
export default PadreDeportes;