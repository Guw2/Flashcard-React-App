import '../css/Navbar.css'

function Navbar(){
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/my-flashcards">My Flashcards</a></li>
                <li><a href="/options">Options</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;