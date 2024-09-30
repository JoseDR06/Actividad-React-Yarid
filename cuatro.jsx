import React, { useState } from "react";

const Contador = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                 La ceunta va en: {count}
            </button>
        </div>
    );
}

export default Contador;
