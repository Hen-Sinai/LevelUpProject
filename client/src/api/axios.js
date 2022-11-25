import axios from "axios"

export const axiosOne = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes/?q='
})

export const getBooks = async (query = '') => {
    const response = await axiosOne.get(`${query}`)
    return response.data.items
}