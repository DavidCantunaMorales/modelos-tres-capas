import { useState, useEffect } from "react";

const ClientesData = () => {
  const [ClientesData, setClientesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch("http://localhost:3001/api/clientes");
        const datosJson = await respuesta.json();
        setClientesData(datosJson);
      } catch (error) {
        console.error("Error fetching empresa data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {console.log(ClientesData)}
      {ClientesData && (
        <table>
          <thead>
            <tr>
              <th>Nombre Empresa</th>
              <th>Nombre Cliente</th>
              <th>Teléfono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {ClientesData.map((empresa) => (
              <tr key={empresa.nombre}>
                <td>{empresa.nombre}</td>
                <td>{empresa.contacto.nombre}</td>
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

export default ClientesData;
