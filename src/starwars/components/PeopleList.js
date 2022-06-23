import { Link } from "react-router-dom"

export const PeopleList = ({ index,selection, ...character }) => {
    let choice = selection
    let imgPath = `/assets/${character.url.slice(character.url.search(choice))}`
    imgPath = imgPath.slice(0,-1)
    return (
        <div className="col mb-5">
            <div className="card text-center bg-dark" style={{height:'26rem'}}>
                <img src={`${imgPath}.jpg`} className="img-fluid" alt='' onError={(e)=> {
                    e.onError = null
                    e.target.src=`/assets/placeholder.jpg`}} />
                <div className="card-body">
                    <Link className="link-light" to={`/${character.url.slice(character.url.search(choice))}`}>
                        <h5 className="card-title position-absolute bottom-0 start-50 translate-middle-x">{(character.name) ? character.name : character.title}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}