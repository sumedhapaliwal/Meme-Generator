export default function Input({ change }) {
    return (
        <div className="input">
            <div className="input-area">
                <input 
                    className="input-text" 
                    id="input-1" 
                    type="text"
                    placeholder="Meme Text Top" 
                    onChange={
                        e => change(e, 'topText')
                    }
                    autoFocus
                />
                <input 
                    className="input-text" 
                    id="input-2" 
                    type="text" 
                    placeholder="Meme Text Bottom"
                    onChange={
                        e =>change(e, 'bottomText')
                    } 
                />
            </div>
            <button className="submit">New Meme</button>
        </div>
    )
}