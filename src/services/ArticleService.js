import axios from "axios"

const url = "https://fakestoreapi.com/products"

export const getArticles = () => {
    return axios.get(url);
}