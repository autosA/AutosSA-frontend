import axios from "axios";

const API_URL = "http://localhost:8081/v1/api";

//clientes
export const createCliente = async (newCliente) => {
    try {
        await axios.post(`${API_URL}/clientes`, newCliente);
    } catch (error) {
        console.error("Error al crear al usuario", error);
        alert("Ocurrio un error al registrar al usuario");
    }
};

export const getClientes = async () => {
    try {
        const response = await axios.get(`${API_URL}/clientes`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};

export const getClienteById = async (idCliente) => {
    try {
        const response = await axios.get(`${API_URL}/clientes/${idCliente}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};


//autos

export const createAuto = async (newAuto) => {
    try {
        await axios.post(`${API_URL}/plans`,newAuto);
    } catch (error) {
        console.error('Error al crear el plan', error);
        alert('Ocurrio un error al registrar el plan');
    }
}

export const getAutosForCliente = async () => {
    try {
        const response = await axios.get(`${API_URL}/autos`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los autos', error);
        alert('Ocurrio un error al obtener los datos de los autos');
    }
}

export const getAutosForAdmin = async () => {
    try {
        const response = await axios.get(`${API_URL}/autos/admin`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los autos', error);
        alert('Ocurrio un error al obtener los datos de los autos');
    }
}