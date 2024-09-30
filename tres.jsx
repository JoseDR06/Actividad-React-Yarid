import React from "react";

const Contenedor = (props) =>{
    return(
        <div >
            <p> {props.titulo}</p>
            <div>{props.children}</div>
        </div>
    );
}


function App() {
    return(
        <div style={{border: "1px solid red"}}>
            <Contenedor >
                <p titulo = "Titulo"></p>
                <p> Informacion del contendor</p>
            </Contenedor>
        </div>
    )
}

export default App;