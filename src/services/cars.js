import axios from "axios"

const baseUrl = "https://carrosapi.ml/api/v1"

export const listarCarros = async () => {
    try {
        return await axios.get(baseUrl + '/car')
    } catch (error) {
        console.log(error.config)
    }
}

export const pegarCarroPorId = async (id) => {
    try {
        return await axios.get(baseUrl + `/car/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const cadastrarCarro = async (infos) => {
    try {
        return await axios.post(baseUrl + '/car', infos)
    } catch (error) {
        console.log(error)
    }
}

export const editarCarroPorId = async (id, infos) => {
    try {
        axios.put(baseUrl + `/car/${id}`, infos)
    } catch (error) {
        console.log(error)
    }
}

export const deletarCarro = async (id) => {
    try {
        await axios.delete(baseUrl + `/car/${id}`)
    } catch (error) {
        console.log(error)
    }
}