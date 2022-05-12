import { useDispatch } from "react-redux"

export const AddProduct = (e) => {
    const dispatch = useDispatch()
    dispatch({
        type: "ADD-PRODUCT",
        payload: e
    })
}