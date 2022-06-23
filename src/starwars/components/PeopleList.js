import { Link } from "react-router-dom"
// import placeholder from '../assets/''
export const PeopleList = ({ index, selection, ...character }) => {
    let choice = selection
    let imgPath = `/assets/${character.url.slice(character.url.search(choice))}`
    imgPath = imgPath.slice(0, -1)
    console.log(imgPath)
    
    return (
<<<<<<< HEAD
        <div className="col mb-5">
            <div className="card text-center bg-dark" style={{height:'26rem'}}>
                <img src={`${imgPath}.jpg`} className="img-fluid" alt='' onError={(e)=> {
                    e.onError = null
                    e.target.src=`/assets/placeholder.jpg`}} />
=======
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col mb-3">
            <div className="card text-center bg-dark" style={{width: '12rem' ,height:'20rem'}}>
                    <img src={`${imgPath}.jpg`} className="img-fluid" alt='' onError={(e) => {
                        e.onError = null
                        e.target.src = 'assets/placeholder.jpg'
                    }} 
                    style={{height: '15rem'}}
                    />
>>>>>>> 9a91db50aa07037983f421f2e13aba91efc7759a
                <div className="card-body">
                    <Link className="link-light  text-decoration-none" to={`/${character.url.slice(character.url.search(choice))}`}>
                        <h5 className="card-title ">{(character.name) ? character.name : character.title}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}