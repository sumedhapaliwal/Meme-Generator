import Input from "./Input"
import { useState } from "react"

const MEME_DATA = [{ // Hard coded the api response
    "id":"87743020",
    "name":"Two Buttons",
    "url":"https://i.imgflip.com/1g8my4.jpg",
    "width":600,
    "height":908,
    "box_count":3,
    "captions":1112750
}]

export default function Body() {
    let [meme, setMeme] = useState(MEME_DATA[0])

    function changeText(e, side) {
        console.log(side)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [side]: e.target.value
            }
        })
    }

    return (
        <div className="body">
            <Input change={changeText}/>
            <div className="meme">
                <div className="meme-box">
                    {
                        meme.topText && 
                        <div className="meme-text meme-text-top" id="top">
                            {meme.topText}
                        </div>
                    }
                    {
                        meme.bottomText && 
                        <div className="meme-text meme-text-bottom" id="bottom">
                            {meme.bottomText}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}