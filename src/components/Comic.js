import { Component } from "react";
class Comic extends Component {
    state={
        comic:{}
    }
    render() {
        return (
            <div>
                <h4 style={{color:"blue"}}>Comic {this.props.comic.titulo}

                </h4>
                <p>{this.props.comic.descripcion}</p>
                <button onClick={()=>{
                    //llamamos al metodo del padre comics
                    this.props.seleccionarFavorito(this.props.comic)

                }}>
                    Seleccionar favorito
                </button>
                <button style={{backgroundColor:"red", color:"white"}} onClick={()=>{
                    var index=parseInt(this.props.index);
                    this.props.deleteComic(index);
                }}>Eliminar</button>
                <img src={this.props.comic.imagen} alt="aaa" style={{width:"150px", height:"150px"}}/>
                
            </div>
        );
    }
}

export default Comic;