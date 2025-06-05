export default function Input({ setRandomMeme, changeMemeText }) {
    return (
        <div className="input">
            <div className="input-area">
                <input 
                    className="input-text" 
                    id="input-1" 
                    type="text"
                    placeholder="Meme Text Top" 
                    onChange={
                        e => changeMemeText(e.currentTarget.value, 'topText')
                    }
                    autoFocus
                />
                <input 
                    className="input-text" 
                    id="input-2" 
                    type="text" 
                    placeholder="Meme Text Bottom"
                    onChange={
                        e => changeMemeText(e.currentTarget.value, 'bottomText')
                    } 
                />
            </div>
            <button 
                className="submit" 
                onClick={setRandomMeme}
            >
                New Meme
            </button>
        </div>
    )
}