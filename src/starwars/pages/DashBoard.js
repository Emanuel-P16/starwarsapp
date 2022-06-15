import { useEffect, useState } from "react"
import { PeopleList } from "../components/PeopleList"


export const DashBoard = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllPeople()
    }, [])

    const getAllPeople = async () => {
        let allChars = []
        let i = 1;
        while (i !== 0) {

            await fetch(`https://swapi.dev/api/people/?page=${i}`)
                .then(resp => resp.json())
                .then(data => {
                    (data.next) ? i++ : i = 0
                    data.results.map(x => {
                        allChars.push(x)
                    })
                    // allChars.push(data.results)
                })
        }
        setCharacters(allChars)



    }
    console.log(characters)
    return (
        <>
            Soy DashBoard
            <div className="container">
                <div className="row">
                {
                    characters?.map((character, index) => {
                        if (index > 15) index++
                        return (
                            <PeopleList
                                key={index}
                                index={index}
                                {...character}
                            />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}