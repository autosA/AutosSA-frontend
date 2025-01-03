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

export const deleteClienteById = async (idCliente) => {
    try {
        await axios.delete(`${API_URL}/clientes/${idCliente}`);
    } catch (error) {
        console.error("Error al eliminar al usuario", error);
        alert("Ocurrio un error al eliminar los datos del usuario");
    }
}


//autos

export const createAuto = async (newAuto) => {
    try {
        await axios.post(`${API_URL}/plans`, newAuto);
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

export const getAutosForAdmin = async (idAdmin) => {
    try {
        const response = await axios.get(`${API_URL}/autos/admin/${idAdmin}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los autos', error);
        alert('Ocurrio un error al obtener los datos de los autos');
    }
}

export const deleteAutoById = async (idAuto) => {
    try {
        await axios.delete(`${API_URL}/autos/${idAuto}`);
    } catch (error) {
        console.error("Error al eliminar auto", error);
        alert("Ocurrio un error al eliminar los datos del auto");
    }
}

export const getAutoByCategory = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/autos/category/${category}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos de la categoria");
    }
}

export const getAutoById = async (idAuto) => {
    try {
        const response = await axios.get(`${API_URL}/autos/${idAuto}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el auto por ID");
        alert("Ocurrio un erro al obtener los datos del auto")
    }
}
//administrador

export const getAdministrador = async () => {
    try {
        const response = await axios.get(`${API_URL}/admins`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del administrador");
    }
}

export const getAdminById = async (idAdmin) => {
    try {
        const response = await axios.get(`${API_URL}/admins/${idAdmin}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del administrador");
    }
}