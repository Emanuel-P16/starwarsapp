// https://starwars-visualguide.com/assets/img/characters/1.jpg

import { Link } from "react-router-dom"

// "https://starwars-visualguide.com/assets/img/characters/1.jpg"
export const PeopleList = ({ index,selection, ...character }) => {
    let choice = selection
    let imgPath = `/assets/${character.url.slice(character.url.search(choice))}`
    imgPath = imgPath.slice(0,-1)
    // if (choice === 'people') {
    //     choice = 'characters'
    // } 
    return (
        <div className="col mb-5">
            <div className="card text-center bg-dark" style={{ width: '13rem' }}>
                {/* <img src={`https://starwars-visualguide.com/assets/img/${choice}/${index + 1}.jpg`} className="img-fluid" alt="" /> */}
                <img src={`${imgPath}.jpg`} className="img-fluid" alt={`/assets/placeholder.jpg`} />
                <div className="card-body">
                    <Link className="link-light" to={`/${character.url.slice(character.url.search(choice))}`}>
                        <h5 className="card-title">{(character.name) ? character.name : character.title}</h5>
                    </Link>
                    {/* <Link to={`/${selection}/${index}`}>
                        <h5 className="card-title">{(character.name) ? character.name : character.title}</h5>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}