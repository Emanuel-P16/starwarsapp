import { useFetchList } from "../hooks/useFetchList"

export const StarShips = () => {
    const data = useFetchList('https://swapi.dev/api/starships')
    console.log(data.data)
    return (
        <div>
            starships
        </div>
    )
}