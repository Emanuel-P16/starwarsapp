import {Route, Routes} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { StarWarsRoutes } from '../starwars/routes/StarWarsRoutes'



export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="/*" element={<StarWarsRoutes/>} />
            </Routes>
        </>
    )
}