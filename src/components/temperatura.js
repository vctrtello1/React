import { Fragment } from 'react';

const TemperaturaJsx = () => {

    const Temperatura = 21

    return (
        <Fragment>
            <h2>Frio o calor</h2>
            <h3>
                {
                    Temperatura > 20 ? 'Calor' : 'Frio'
                }
                </h3>
        </Fragment>

    );
}

export default TemperaturaJsx;