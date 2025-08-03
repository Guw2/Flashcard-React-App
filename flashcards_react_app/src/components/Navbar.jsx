import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-flashcards">My Flashcards</Link></li>
                    <li><Link to="/options">Options</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;