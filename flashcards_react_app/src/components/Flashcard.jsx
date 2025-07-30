import React, {useState, useEffect} from "react";
import '../css/Flashcard.css'

function Flashcard({card}){

    const [isTurned, setIsTurned] = useState(false);

    const [flashcardColorPalette, setFlashcardColorPalette] = 
        useState(
            {
                font_palette: ["black", "white"], 
                card_palette: ["white", "rgb(49, 49, 49)"]
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

    return(

        <div className="flashcard-main-div" onClick={toggleBack}>
            <div className="flashcard-title-div">
                <p className="flashcard-title">{card.title}</p>
            </div>

            <div className="card-div">
                <div className="card">
                    <p>{isTurned ? card.back : card.front}</p>
                </div>
            </div>
        </div>
    );

}

export default Flashcard;