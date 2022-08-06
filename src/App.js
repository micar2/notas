import './App.css';
import logo from './imagenes/gettyimages-594826601-2048x2048.jpg';
import Tarea from './componentes/tarea';

function App() {
  return (
    <div className="aplication-tareas">
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo' />
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <Tarea texto={`Aprender React`} completada={false} />
      </div>
    </div>
  );
}

export default App;
