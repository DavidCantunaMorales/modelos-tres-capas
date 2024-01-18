const fetchEmpresaData = async () => {
  try {
    const response = await fetch("/api/empresa");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching empresa data:", error);
    throw error;
  }
};

export default { fetchEmpresaData };
