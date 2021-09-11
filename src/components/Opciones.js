import React from "react";

export default class Opciones extends React.Component {
   
    render() { 
        return (
                <div className= "opciones">
                <div className= "opcion">
                    <button className= "botones" onClick= {this.props.handleSelectA}>A</button>
                    <h2>
                        {this.props.opcionA}
                    </h2>
                </div>
                
                <div className= "opcion">
                    <button className= "botones" onClick= {this.props.handleSelectB}>B</button>
                    <h2>
                        {this.props.opcionB}
                    </h2>
                </div>
             </div>
        );
    }
}