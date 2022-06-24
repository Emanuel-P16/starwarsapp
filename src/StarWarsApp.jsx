import { AppRouter } from "./router/AppRouter"
import './index.css'
import { AuthProvider } from "./auth/context"
export const StarWarsApp = () => {
    return (
        <AuthProvider>
            <div className="bg bg-dark">
                <AppRouter />
            </div>
        </AuthProvider>
    )
}