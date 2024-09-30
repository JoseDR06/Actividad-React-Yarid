import React from "react";

const App = () => {
    const Saludo = (props) => {
        return(
            <h1> Hola {props.nombre}</h1> 
        );
    };    
    return (
        <div>
            <Saludo nombre ="Juan Perez l" />
        </div>
    );
};

export default App;