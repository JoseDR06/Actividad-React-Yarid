import React from "react";

const Saludo = ({ nombre, idioma }) => {
    const entrada = {
        Es: `Hola ${nombre}`,
        En: `Hello ${nombre}`,
        Pr: `Ola ${nombre}`
    };

    return (
        <h1>{entrada[idioma] || `??? ${nombre}`}</h1>
    );
};

const App = () => {
    return (
        <div>
            <Saludo nombre="Juan" idioma="Es" />
            <Saludo nombre="Pablo" idioma="En" />
            <Saludo nombre="Anita" idioma="Pr" />
        </div>
    );
};

export default App;
