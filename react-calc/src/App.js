import {useState} from "react";
import './App.css';
import Display from "./componentes/display/display.js";
import Numeros from "./componentes/numeros/numeros.js";

function App() {
    const [estado, setEstado] = useState(
      {
        resultado: '0',
        operador: '',
        val1: '0',
        val2: '0'
      }
    );

    return (
      <div className="contenedor">
        <Display vals={estado} />
        <Numeros />
      </div>
    );
}

export default App;
