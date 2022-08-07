import React,{useState} from 'react';
import '../hojasEstilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormunario(props) {
    
    const [input, setInput] = useState('');
    
    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        console.log(`Enviando formulario con tarea`);

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    };

    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto' 
                onChange={manejarCambio}           
            />
            <button className='tarea-boton'>
                Agrega Tarea
            </button>
        </form>
    );
}

export default TareaFormunario;