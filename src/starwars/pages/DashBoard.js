import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BtnToolbar } from "../../ui/components/BtnToolbar"
import { Footer } from "../../ui/components/Footer"
import { Spinner } from "../../ui/components/Spinner"
import { PeopleList } from "../components/PeopleList"


export const DashBoard = () => {
    const [characters, setCharacters] = useState([])
    const [buttons, setButtons] = useState([0])
    const [whatPage, setWhatPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndindex] = useState(4)
    let { selection = 'people' } = useParams()
    if (selection === 'starwarsapp') {
        selection = 'people'
    }

    useEffect(() => {
        setCharacters(null)
        setButtons([0])
        setWhatPage(1)
        setStartIndex(0)
        setEndindex(4)
        if (selection !== 'favs') {
            getAllPeople()
        } else {
            getFavs()
        }
    }, [selection])

    const getAllPeople = (page = 1) => {
        setCharacters(null)
        setWhatPage(page)
        fetch(`https://swapi.dev/api/${selection}/?page=${page}`)
            .then(resp => resp.json())
            .then(data => {
                setButtons(Array.from(Array(Math.ceil(data.count / 10)).keys()))
                setCharacters(data.results)
                pagesToShow(page)
            })

    }
    const getFavs = () => {
        const char = JSON.parse(localStorage.getItem('favs'))
        if (!char) {
            setCharacters([])
        } else {
            setButtons([0])
            setCharacters(char)
        }
    }
    const pagesToShow = (page) => {
        if (page !== 1) {
            setStartIndex(page - 2)
            setEndindex(page + 2)
            if (page === buttons.length) {
                setStartIndex(page - 4)
            }
        }

    }
    if (characters) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <div className=" container">
                    <BtnToolbar buttons={buttons}
                        getAllPeople={getAllPeople}
                        whatPage={whatPage}
                        startIndex={startIndex}
                        endIndex={endIndex}
                    />
                    <div className=' ps-4 ms-5 ms-xl-0 ms-lg-0 ms-md-0 ms-sm-0'>
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
                    <Footer/>
            </div>
        )
    } else {
        return (
        <div className="container">
            <BtnToolbar buttons={buttons}
                getAllPeople={getAllPeople}
                whatPage={whatPage}
                startIndex={startIndex}
                endIndex={endIndex}
            />
            <Spinner />
            <Footer/>
        </div>
        )
    }
}