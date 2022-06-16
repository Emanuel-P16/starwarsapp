
import { useParams, useNavigate } from 'react-router-dom'
import { useFetchId } from '../hooks/useFetchId'
export const PeoplePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const data = useFetchId('https://swapi.dev/api/people',id)
    console.log(data)
    const onNavigateBack = () => {
        navigate(-1)
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${Number(id) + 1}.jpg`}
                alt="Img not found"
                className="card-img-top"
            />
            <div className="cardbody">
                <h5 className="card-title">{data.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.data.gender}</li>
                    <li className="list-group-item">{data.data.height}</li>
                    <li className="list-group-item">{data.data.mass}</li>
                </ul>
                {/* <p className="card-text">{data.gender}</p>
                <p className="card-text">{data.height}</p> */}
                <button
                    className='btn btn-outline-primary'
                    onClick={onNavigateBack}
                >Back</button>
            </div>
        </div>
    )
}