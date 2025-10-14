import { Component } from "react";
import HijoDeporte from "./HijoDeporte";
class PadreDeportes extends Component {
    deportes=["Futbol","Poker","Curling","Petanca"];
    render() {
        return (
            <div>
                <h1>Padre Deportes</h1>
                
                {
                    this.deportes.map((deporte,index) => {
                        return(<HijoDeporte key={index} nombre={deporte}/>)
                    })


                }
            </div>
        )
    }
}
export default PadreDeportes;