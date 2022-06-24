import {Routes,Route} from 'react-router-dom'
import { Footer } from '../../ui/components/Footer'
import { Navbar } from '../../ui/components/Navbar'
import { DashBoard } from '../pages'
import { CardPage } from '../pages/CardPage'
export const StarWarsRoutes = () => {
    return(
        <>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<DashBoard/>}/>
                    <Route path="/:selection" element={<DashBoard/>}/>
                    <Route path="/:selection/:id" element={<CardPage/>}/>
                </Routes>
                {/* <Footer /> */}
        </>
    )
}