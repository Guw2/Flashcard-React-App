import '../css/Home.css'
import { Link } from 'react-router-dom';

function Home(){

    

    return(
        <div className="main-div">
            <div className='addflashcard-div'>
                <Link to="/create-flashcard">
                    <button className='addflashcard-button'>Add Flashcard</button>
                </Link>
            </div>
        </div>
    );
}

export default Home; 