
import { NavLink, useNavigate } from 'react-router-dom'
export const Navbar = () => {

    const navigate = useNavigate()
    const logoutfunction = () => {
        console.log('logout')
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/'
                        >
                            Characters
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/planets'
                        >
                            Planets
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/species'
                        >
                            Species
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/starships'
                        >
                            Starships
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/vehicles'
                        >
                            Vehicles
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/films'
                        >
                            Films
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to='/favs'
                        >
                          Favorites
                        </NavLink>
                    </ul>
                    <div className='d-flex'>
                        <ul className='navbar-nav ml-auto'>
                            <span className='nav-item nav-link'>
                                Emanuel
                            </span>
                            <button
                                className='btn btn-dark'
                                onClick={logoutfunction}
                            >Logout</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
