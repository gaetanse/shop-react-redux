import { AddProduct } from "./../redux/actions/ActionProduct"
import { getArticles } from "./../services/ArticleService"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Card,Row,Col } from "react-bootstrap"

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

<Row xs={1} md={4} className="g-2">
            {
                listeProducts.lenght !== 0 ?
                listeProducts.map((e,i)=>{
                    return(
                        <Col>
                        <Card style={{ width: 'auto', height: '300px',border: "solid 1px black" }}>
                                  <Card.Img variant="top" src={e.image} style={{ width: 'auto', height: '150px',background: "#F7F7F7" }} />
                            <Card.Body style={{color:"#E42F32"}}>
                                <Card.Text><strong>{e.title}</strong></Card.Text>
                                <Card.Text style={{fontSize: "12px"}}><strong>{e.price}</strong></Card.Text>
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
