import { AddProduct } from "./../redux/actions/ActionProduct"
import { getArticles } from "./../services/ArticleService"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"

export default function ListeProduct() {

    const dispatch = useDispatch()

    const listeProducts = useSelector(state=>state.listeProducts)

    useEffect(() =>{
        getArticles().then(res =>{
            console.log(res.data)
            res.data.map(p=>{
                return(
                    dispatch({
                        type: "ADD-PRODUCT",
                        payload: p
                    })
                )
            })
        })
    }, [])

    return (
        <div>

            {
                listeProducts.lenght !== 0 ?
                listeProducts.map((e,i)=>{
                    return(
                        <div>
                            <p>{e.title}</p>
                            <img src={e.image}/>
                            <p>{e.price}</p>
                        </div>
                    )
                })
                : <div></div>
            }

        </div>
    )
}
