import { Component } from "react";
class DibujosComplejos extends Component {
    dibujarNumeros=()=>{
        var lista=[];
        for(var i=1;i<=7;i++){
            var numero= parseInt(Math.random()*100)+1;
            //MEDIANTE PUSH VAMOS AÑADIENDO METODOS A LA LISTA
            lista.push(<li key={i}>{numero}</li>)

        }
        return lista;
    }

    render() {
        return (
            <div>
                <h1>Dibujos dinámicos React</h1>
                <ul>
                    {this.dibujarNumeros()}


                </ul>


            </div>
        )
    }
}
export default DibujosComplejos;