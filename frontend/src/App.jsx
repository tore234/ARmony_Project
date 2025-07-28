import { useState } from 'react';
import axios from 'axios';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const enviarMensaje = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/chat', {
        mensaje
      });
      setRespuesta(res.data.respuesta);
    } catch (error) {
      setRespuesta('Error al conectar con el backend');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ARmony Bot</h1>
      <input
        type="text"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje"
      />
      <button onClick={enviarMensaje}>Enviar</button>
      <p><b>Bot:</b> {respuesta}</p>
    </div>
  );
}

export default App;
