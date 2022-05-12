export default function actionProduct() {
    const dispatch = useDispatch()
    function addProduct(e){
        dispatch({
            type: "ADD-PRODUCT",
            payload: e
        })
    }
}