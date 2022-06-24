import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../starwars/hooks/useForm"
import { AuthContext } from "../context"

export const LoginPage = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const { searchText, onInputChange } = useForm({
        searchText: ''
    })
    const onLogSubmit = (event) => {
        event.preventDefault();
        login(searchText)
        navigate('/')
    }
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <div className="">
                <h2 className="text-center text-warning">Log in</h2>
                <div className="row ">
                    <div className="col ">
                        <form
                            className="d-flex flex-column align-items-center"
                            onSubmit={onLogSubmit}>
                            <label  className="form-label text-warning">Username</label>
                            <input
                                type="text"
                                placeholder="Insert username"
                                className="form-control mb-2"
                                id="userID"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={onInputChange}
                            />
                            <button className="btn btn-warning btn-outline-dark">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}