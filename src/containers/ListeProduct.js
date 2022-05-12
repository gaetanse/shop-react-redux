import React from 'react'

export default function ListeProduct() {

    const dispatch = useDispatch()
    const listePokemons = useSelector(state=>state.listePokemons)

    useEffect(() =>{
        getPokemons().then(res =>{
            const data = res.data.results
            data.map(e=>{
                return(
                    dispatch({
                        type: "ADD-POKEMON",
                        payload: e
                    })
                )
            })
        })
    }, [])

    return (
        <div>ListeProduct</div>
    )
}
