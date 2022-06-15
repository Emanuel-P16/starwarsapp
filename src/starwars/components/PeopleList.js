// https://starwars-visualguide.com/assets/img/characters/1.jpg
"https://starwars-visualguide.com/assets/img/characters/1.jpg"
export const PeopleList = ({index,...character}) => {
    return (
        <div className="col mb-5">
            <div className="card text-center" style={{width: '13rem'}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} className="img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                </div>
            </div>
        </div>
    )
}