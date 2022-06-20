import {Routes,Route} from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DashBoard } from '../pages'
import { PeoplePage } from '../pages/PeoplePage'
import { StarShips } from '../pages/StarShips'
export const StarWarsRoutes = () => {
    return(
        <>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<DashBoard/>}/>
                    <Route path="/:selection" element={<DashBoard/>}/>
                    <Route path="/:selection/:id" element={<PeoplePage/>}/>
                    {/* <Route path="/starships" element={<StarShips/>}/> */}
                </Routes>
        </>
    )
}