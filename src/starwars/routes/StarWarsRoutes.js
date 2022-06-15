import {Routes,Route} from 'react-router-dom'
import { DashBoard } from '../pages'
export const StarWarsRoutes = () => {
    return(
        <>
            <nav>soy navbar</nav>
            <div>
                <Routes>
                    <Route path="/" element={<DashBoard/>}/>
                </Routes>
            </div>
        </>
    )
}