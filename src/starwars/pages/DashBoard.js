import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PeopleList } from "../components/PeopleList"


export const DashBoard = () => {
    const [characters, setCharacters] = useState([])//useState(JSON.parse(localStorage.getItem('list')))
    // const people = JSON.parse(localStorage.getItem('list')) /// characters 
    let {selection = 'people'} = useParams()

    useEffect(() => {
        // if (!characters) {
        //     getAllPeople()
        // }
        setCharacters(null)
        getAllPeople()
    }, [selection])

    const getAllPeople =  () => {
        let i = 1;
         fetch(`https://swapi.dev/api/${selection}/?page=${i}`)
            .then(resp => resp.json())
            .then(data => {
                setCharacters(data.results)
                // localStorage.setItem('list', JSON.stringify(data.results))
            })

    }
    if (characters) {
        return (
            <>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-center mt-5' >
                        <div className="row mb-5">
                            {
                                characters?.map((character, index) => {
                                    if (index > 15) index++
                                    return (
                                        <PeopleList
                                            key={index}
                                            index={index}
                                            selection={selection}
                                            {...character}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className="h-100 d-flex align-items-center justify-content-center" >
                    <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}