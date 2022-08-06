import './App.css';
import logo from './imagenes/gettyimages-594826601-2048x2048.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

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
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
