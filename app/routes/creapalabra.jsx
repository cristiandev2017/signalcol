import React, { useState } from 'react';
//import './Creapalabra.css'; // Asegúrate de tener un archivo CSS asociado

function Creapalabra() {
  const initialState = ['', '', '', '', '', '', '', '', '', ''];
  const [letras, setLetras] = useState(initialState);


  const handleInput = (index, value) => {
    const newLetras = [...letras];
    newLetras[index] = value.toUpperCase();
    setLetras(newLetras);
  };

  const resetInputs = () => {
    setLetras(initialState);
  };

  return (
    <center>
    <div className="contenido">
      <h2 className="heading">Creemos palabras 🫠</h2>
      <button onClick={resetInputs}>Restablecer</button>
      <br /><br />
      <div className="letras-container">
        {letras.map((letra, index) => (
          <div key={index} className="letra-item">
            {letra && letra.match(/^[A-Za-z]$/) && (
              <img src={`/img/${letra.toUpperCase()}.png`} alt={letra} />
            )}
            <input
              type="text"
              value={letra}
              onChange={(e) => handleInput(index, e.target.value)}
              maxLength={1}
            />
          </div>
        ))}
      </div>
      <p>El objetivo de esta pestaña es que el usuario pueda deletrear palabras, nombres, cosas, animales en forma de señas y que se vea representado de manera visual, dando asi una herramienta didactica y generando material de valor para la inclusión de la comunidad sorda</p>
    </div>
    </center>
  );
}

export default Creapalabra;
