import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BtnToolbar } from "../../ui/components/BtnToolbar"
import { Spinner } from "../../ui/components/Spinner"
import { PeopleList } from "../components/PeopleList"


export const DashBoard = () => {
    const [characters, setCharacters] = useState([])//useState(JSON.parse(localStorage.getItem('list')))
    const [buttons, setButtons] = useState([0])
    const [whatPage, setWhatPage] = useState(1)
    const [startIndex,setStartIndex] = useState(0)
    const [endIndex,setEndindex] = useState(11)

    // const people = JSON.parse(localStorage.getItem('list')) /// characters 
    let { selection = 'people' } = useParams()

    useEffect(() => {
        // if (!characters) {
        //     getAllPeople()
        // }
        setCharacters(null)
        getAllPeople()
    }, [selection])

    const getAllPeople = async(page = 1) => {
        // setCharacters(null)
        setWhatPage(page)
        
        let i = 1;
        await fetch(`https://swapi.dev/api/${selection}/?page=${page}`)
            .then(resp => resp.json())
            .then(data => {
                setButtons(Array.from(Array(Math.ceil(data.count / 10)).keys()))
                setCharacters(data.results)
                pagesToShow(page)
                // localStorage.setItem('list', JSON.stringify(data.results))
            })

    }
    const pagesToShow = (page) => {
        if(page !== 1 ) {
            // console.log(page)
            // setStartIndex(page+1)
            // setEndindex(page+2)
            let arr =buttons.map((x,index)=>{
                console.log(x)
                if(x >= page-1){
                    return x
                } else {
                    return null 
                } 
            })
            console.log(arr.filter(e=>e))
            setButtons(arr.filter(e=>e))

        }
    }
    if (characters) {
        return (
            <>
                <div className="container">
                    <BtnToolbar buttons={buttons}
                        getAllPeople={getAllPeople}
                        whatPage={whatPage}
                        startIndex={startIndex}
                        endIndex={endIndex}
                    />
                    <div className='d-flex align-items-center justify-content-center' >
                        <div className="row">
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
            <Spinner />
        )
    }
}