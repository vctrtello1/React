import { useState,Fragment } from 'react';

const Lista = () => {

    const [ArrayNumeros, setArrayNumeros] = useState([4,6,7,9])

    const [Numero, setNumero] = useState(9)

    const agregarElemento = () => {

        setNumero(Numero + 3)

        setArrayNumeros([
            ...ArrayNumeros,
            Numero
        ])
    }

    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                ArrayNumeros.map((item, index) =>
                    <p key={index}>{item} - {index} </p>                    
                )
            }
        </Fragment>

    );
}

export default Lista;