import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import '../css/Flashcard.css'

function Flashcard({card}){

    const [isTurned, setIsTurned] = useState(false);
    const arrayNumberOfItems = useRef(0);

    const [flashcardColorPalette, setFlashcardColorPalette] = 
        useState(
            {
                font_palette: ["black", "white"], 
                card_palette: ["white", "black"]
            }
        );
    
 
    useEffect(() => {
        const div = document.getElementsByClassName("card-div")[0];
        div.style.backgroundColor = isTurned ? flashcardColorPalette.card_palette[1] : flashcardColorPalette.card_palette[0];
        div.style.color = isTurned ? flashcardColorPalette.font_palette[1] : flashcardColorPalette.font_palette[0];
    
    }, [isTurned, flashcardColorPalette])

    function toggleBack(){
        setIsTurned(x => x = !x);
    }

    const navigate = useNavigate();

    function nextCard(){
        if((card.length - 1) > arrayNumberOfItems.current){
            setIsTurned(false);
            arrayNumberOfItems.current++;
        }else{
            navigate("/");
        }
        
    }

    return(
        <>
            <div className="flashcard-main-div" onClick={toggleBack}>
                <div className="flashcard-title-div">
                    <p className="flashcard-title">{card[arrayNumberOfItems.current].title}</p>
                </div>

                <div className="card-div">
                    <div className="card">
                        <p>{isTurned ? card[arrayNumberOfItems.current].back : card[arrayNumberOfItems.current].front}</p>
                    </div>
                </div>
            </div>
            <button onClick={nextCard} hidden={isTurned ? false : true}>Next</button>
        </>
    );

}

export default Flashcard;