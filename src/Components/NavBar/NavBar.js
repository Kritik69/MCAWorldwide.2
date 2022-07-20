import './NavBar.css'
import NavBarImg from './../../Video&Images/mca/NewLogo.png'
import { Link } from 'react-router-dom'

const NavBar = ()=> {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"> <img className='logoImg' src={NavBarImg} alt='' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                    <Link to='/contactus' className="nav-link" href="#">Contact Us</Link>
                    </li>
                    {/* <li class="nav-item">
                        <a href='https://mcaworldwide.in/wp-content/uploads/2022/01/Tata-Motors-RWA.pdf'>
                            <Button className='proposal-btn'>Current Proposal</Button>{' '}
                        </a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;