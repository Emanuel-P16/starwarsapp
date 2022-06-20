
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner } from '../../ui/components/Spinner'
import { useFetchId } from '../hooks/useFetchId'
export const CardPage = () => {
    const { selection, id } = useParams()
    const data = useFetchId(`https://swapi.dev/api/${selection}`, id)

    let choice = selection
    let attributes = ''
   

    const navigate = useNavigate()
    const onNavigateBack = () => {
        navigate(-1)
    }

    if (data.data) {
        let imgPath = `/assets/${data.data.url.slice(data.data.url.search(choice))}`
        imgPath = imgPath.slice(0,-1)
        attributes = Object.keys(data.data)
       attributes = attributes.filter(x => {
        return x !== 'url' && x !== 'created' && x !== 'edited' && x !== 'starships' && x !== 'vehicles' && x !== 'films' && x !== 'homeworld' && x !== 'species' && x !== 'people' && x !== 'characters' && x !== 'planets' && x !== 'episode_id'
       })
        return (

            <div className='container-fluid d-flex align-items-center justify-content-center mt-5'  style={{maxWidth: '55%'}}>
                <div className="card text-bg-dark border-light mt-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src={`${imgPath}.jpg`}
                                alt="Img not found"
                                className="img-fluid rounded-start"
                                style={{width:'100%',height: '100%'}}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-center">{data.data.name}</h5>
                                {/* <ul className="list-group list-group-flush"> */}
                                    {attributes.map((x, index) => {
                                        return (
                                            // <li className="list-group-item" key={index} >
                                                <p key={index} className=''> {x.charAt(0).toUpperCase() + x.slice(1).replace('_', ' ')}: {data.data[x]}</p>

                                            // </li>
                                        )
                                    })}
                                    <button
                                        className='btn btn-outline-light'
                                        onClick={onNavigateBack}
                                    >Back</button>
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
          <Spinner/>
        )
    }
}
{/* <li className="list-group-item">
<h4>Gender: {data.data.gender}</h4>
</li>
<li className="list-group-item"><h4>Height: {data.data.height}</h4></li>
<li className="list-group-item"><h4>Mass: {data.data.mass} </h4></li>
<li className="list-group-item"><h4>Birth: {data.data.birth_year} </h4></li>
<li className="list-group-item"><h4>species: {data.data.species} </h4></li>
<li className="list-group-item"><h4>homeworld: {data.data.homeworld} </h4></li>
<li className="list-group-item"><h4>skin_color: {data.data.skin_color} </h4></li>
<li className="list-group-item"><h4>hair_color: {data.data.hair_color} </h4></li>
<li className="list-group-item"><h4>eye_color: {data.data.eye_color} </h4></li>
<button
className='btn btn-outline-primary'
onClick={onNavigateBack}
>Back</button> */}