import { Component } from "react";
class HijoDeporte extends Component {       
 
seleccionarFavorito=()=>{
    //capturamos el deporte del propio component del props
    var deporte=this.props.nombre;
    //invocamos al metodo del padre que nos llega por props
    this.props.mostrarFavorito(deporte);
}
    

    render() {
        return (
            <div>
                <h3 style={{color:"blue"}}>Deporte: {this.props.nombre}</h3>
              
                <button onClick={this.seleccionarFavorito}>Seleccionar favorito </button>
            </div>
        )
    }
}
export default HijoDeporte;