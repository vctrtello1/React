import { Fragment, useState } from 'react';

const Formulario = () => {

    const [Datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...Datos,
            [event.target.name]: event.target.value
        })

    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row">
                <div className="col-md-3">
                    <input
                        placeholder="Ïngresar nombre"
                        className="form_control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ïngresar apellido"
                        className="form_control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{Datos.nombre} {Datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;