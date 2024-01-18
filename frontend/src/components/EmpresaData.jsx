import { useState, useEffect } from "react";
import "./EmpresaData.css";

const EmpresaData = () => {
  const [empresaData, setEmpresaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch("http://localhost:3001/api/empresa");
        const datosJson = await respuesta.json();
        setEmpresaData(datosJson);
      } catch (error) {
        console.error("Error fetching empresa data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {console.log(empresaData)}
      {empresaData && (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {empresaData.map((empresa) => (
              <tr key={empresa.nombre}>
                <td>{empresa.nombre}</td>
                <td>
                  {empresa.direccion && empresa.direccion.calle
                    ? `${empresa.direccion.calle}, ${empresa.direccion.ciudad}, ${empresa.direccion.pais}`
                    : "Dirección no disponible"}
                </td>
                <td>{empresa.contacto && empresa.contacto.telefono}</td>
                <td>{empresa.contacto && empresa.contacto.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmpresaData;
