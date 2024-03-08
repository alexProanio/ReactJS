import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function App() {
  const baseUrl = "http://localhost:5026/api/Usuario/ListaUsuarios";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        const dataArray = Array.isArray(response.data.response) ? response.data.response : [response.data.response];
        setData(dataArray);
        console.log('ingreso');
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>IdUsuario</th>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.map(usuario => (
            <tr key={usuario.idUsuario}>
              <td>{usuario.idUsuario}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.cedula}</td>
              <td>
                <button className="btn btn-primary">Editar</button>{" "}
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>
    </div>
  );
}

export default App;
