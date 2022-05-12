import { useDispatch } from "react-redux"

export default function ActionProduct() {

    const dispatch = useDispatch()
    
    function addProduct(e){
        dispatch({
            type: "ADD-PRODUCT",
            payload: e
        })
    }
}