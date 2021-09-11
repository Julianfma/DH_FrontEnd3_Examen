import React from "react";
import Recordatorio from "./Recordatorio";
import Opciones from "./Opciones";
import data from "./data.json";

const historialEleccion = [];

class Layout extends React.Component{

    constructor() {
        super();
        this.state = {
            contador: 1,
            opcion: "",
        }
    }

    componentDidUpdate(e) {
        if (this.state.contador !== e) {
            historialEleccion.push(this.state.opcion.toUpperCase());
        }
    }

    handleSelectA = () => {
         if (this.state.contador === 5) { alert("Fin.");
        } else { this.setState({
                contador: this.state.contador + 1,
                opcion: "a"})
        }
    }

    handleSelectB = () => {
        if (this.state.contador === 5) { alert("Fin.");
        } else {
            this.setState({
                contador: this.state.contador + 1,
                opcion: "b"})
        }
    }


    render(){
        return(
            <div className="layout">

                <h1 className="historia">{data.find(e => e.id === (this.state.contador + this.state.opcion)).historia}</h1>

                <Opciones

                    handleSelectA={this.handleSelectA}

                    handleSelectB={this.handleSelectB}
                    
                    opcionA={
                        data.find(e =>
                          e.id === (this.state.contador + this.state.opcion)).opciones.a
                        }
                    
                        opcionB={data.find(e => 
                            e.id === (this.state.contador + this.state.opcion)).opciones.b}
                />

                <Recordatorio
                    seleccionAnterior={this.state.opcion.toUpperCase()}
                    historial={historialEleccion.map((e, index) => 
                        (<li key={index}>{e}</li>))}
                />

            </div>
        )
    }
}
export default Layout;
