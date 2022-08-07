import React, {useState} from 'react';
import TareaFormunario from './TareaFormunario';
import '../hojasEstilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
          tarea.texto = tarea.texto.trim();
          const tareasActualizadas = [tarea, ...tareas];
          setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        console.log(tareas)
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        console.log(tareasActualizadas)
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
          if (tarea.id === id) {
            tarea.completada = !tarea.completada;
          }
          return tarea;
        });
        setTareas(tareasActualizadas);
      }

    return(
        <>
            <TareaFormunario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                LISTA DE TAREAS
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );

}

export default ListaDeTareas;