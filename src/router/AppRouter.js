import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { StarWarsRoutes } from '../starwars/routes/StarWarsRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="login" element={<LoginPage/>}/> */}
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                }
                />
                <Route path="/*" element={
                    <PrivateRoutes>
                        <StarWarsRoutes />
                        {/* <Routes>
                            <Route path="/*" element={<StarWarsRoutes />} />
                        </Routes> */}
                    </PrivateRoutes>
                } />
                {/* <Route path="/*" element={<StarWarsRoutes />} /> */}
            </Routes>
        </>
    )
}