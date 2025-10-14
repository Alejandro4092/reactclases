import { Component } from "react";
class DibujosComplejosRender extends Component {
//Necesitamos un array con nombre debe estar declarado en state para actualizar el dibujo
    state={
        nombres:["Lucia","Diana","Antonia","Sofia","Adrian"]
    }
    generarNombre = () => {
        // Añadimos un nombre usando setState para mantener inmutabilidad
        this.state.nombres.push("Nuevo Nombre");
        this.setState({
            nombres: this.state.nombres
        });
     
    }


    render() {
        return (
            <div>
                <h1>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>Agregar Nombre</button>
                {
                    //Este codigo es jsx de react
                    //Y el codigo lógico debe contener un return
                    this.state.nombres.map((nombre, index) => {
                        return (<h3 style={{ color: "blue" }} key={index}>{nombre}</h3>)
                       //Este codigo no puede estar vacio necesita un return
                    })

                }
                
        
            </div>
        )
    }
}
export default DibujosComplejosRender;