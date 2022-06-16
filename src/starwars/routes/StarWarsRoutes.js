import {Routes,Route} from 'react-router-dom'
import { DashBoard } from '../pages'
import { PeoplePage } from '../pages/PeoplePage'
export const StarWarsRoutes = () => {
    return(
        <>
            <nav>soy navbar</nav>
            <div>
                <Routes>
                    <Route path="/" element={<DashBoard/>}/>
                    <Route path="people/:id" element={<PeoplePage/>}/>
                </Routes>
            </div>
        </>
    )
}