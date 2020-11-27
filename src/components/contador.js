import {useState,Fragment} from 'react';

const Contador = () => {

    const [Numero, setNumero] = useState(0);

    const aumentar = () =>{
        console.log('me diste click')
        setNumero(Numero + 1)
    }

    return ( 
        <Fragment>
            <h3>Mi primer componente {Numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    
     );
}
 
export default Contador;
