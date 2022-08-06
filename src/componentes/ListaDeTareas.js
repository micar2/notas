import React, {useState} from 'react';
import TareaFormunario from './TareaFormunario';
import '../hojasEstilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log('Tarea agrgada');
        console.log(tarea);
    };

    return(
        <>
            <TareaFormunario />
            <div className='tareas-lista-contenedor'>
                LISTA DE TAREAS
                {
                    tareas.map((tarea) =>
                        <Tarea
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );

}

export default ListaDeTareas;