const fetchClientesData = async () => {
  try {
    const response = await fetch("/api/clientes");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching clientes data:", error);
    throw error;
  }
};

export default { fetchClientesData };
