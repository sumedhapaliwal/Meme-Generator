import Input from "./Input"
import { useEffect, useRef, useState } from "react"
import { updateMemeInCSS } from "../lib/funcs";
import useRunOnce from "../hooks/useRunOnce";

const MEME_API = "https://api.imgflip.com/get_memes";

export default function Body() {
    const memes = useRef([]);
    
    const [memeCaption, setMemeCaption] = useState(getRandomMeme().caption);
    const [meme, setMeme] = useState(getRandomMeme().meme);

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memes.current.length);
        return {
            caption: {
                topText: "",
                bottomText: "",
            },
            meme: {
                url: memes.current[randomIndex]?.url || "",
                width: memes.current[randomIndex]?.width || 0,
                height: memes.current[randomIndex]?.height || 0
            }
        };
    }

    function setRandomMeme() {
        const randomMeme = getRandomMeme();
        setMeme(randomMeme.meme);
        setMemeCaption(randomMeme.caption);
    }

    function changeMemeText(value, side) {
        setMemeCaption(prevMeme => {
            return {
                ...prevMeme,
                [side]: value
            };
        });
    }

    useRunOnce(() => {
        fetch(MEME_API)
            .then(response => response.json())
            .then(data => {
                memes.current = data.data.memes
                setRandomMeme();
            });
    }, []);

    useEffect(() => {
        updateMemeInCSS(meme);
    }, [meme]);

    return (
        <div className="body">
            <Input 
                setRandomMeme={setRandomMeme} 
                changeMemeText={changeMemeText}
            />

            <div className="meme">
                <div className="meme-box">
                    {
                        memeCaption.topText && 
                        <div className="meme-text meme-text-top" id="top">
                            {memeCaption.topText}
                        </div>
                    }
                    {
                        memeCaption.bottomText && 
                        <div className="meme-text meme-text-bottom" id="bottom">
                            {memeCaption.bottomText}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}