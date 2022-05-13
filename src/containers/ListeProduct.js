import { AddProduct } from "./../redux/actions/ActionProduct"
import { getArticles } from "./../services/ArticleService"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Card,Row,Col } from "react-bootstrap"
import { useNavigate } from  "react-router-dom"

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

    const navigate = useNavigate()

    function GoTodetail(e,element){
        e.preventDefault()
        navigate("/detail",{
          state:{
            image: element.image,
            title: element.title,
            price: element.price,
            category: element.category,
            description: element.description
          }
        })
    }

    return (
        <div>

<Row xs={1} md={4} className="g-2">
            {
                listeProducts.lenght !== 0 ?
                listeProducts.map((el,i)=>{
                    return(
                        <Col key={i} onClick={(e)=>GoTodetail(e,el)}>
                        <Card style={{ width: 'auto', height: '375px',border: "solid 1px black" }}>
                                  <Card.Img className="my-4" variant="top" src={el.image} style={{ width: '150px', height: '150px',background: "#F7F7F7",margin: "auto auto" }} />
                            <Card.Body style={{color:"#E42F32",margin: "auto auto"}}>
                                <Card.Text><strong>{el.title}</strong></Card.Text>
                                <Card.Text style={{fontSize: "12px"}}><strong>{el.category}</strong></Card.Text>
                                <Card.Text style={{fontSize: "12px"}}><strong>{el.price} $</strong></Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })
                : <div></div>
            }
</Row>
        </div>
    )
}
