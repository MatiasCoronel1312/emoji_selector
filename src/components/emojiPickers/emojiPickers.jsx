import { forwardRef, useState } from "react"
import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";


export function EmojiPicker(props, inputRef) {

    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState([...emojiList]);

    
    function handleClickOpen () {        
        setIsOpen(!isOpen);
        //console.log(isOpen);
    }
    function handleSearch(e) {
        const q = e.target.value.toLowerCase()

        if (!!q) {
            const search = emojiList.filter((emoji) =>{
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q)
                );
            });
            setEmojis(search);
            console.log(search);
        } else {
            setEmojis(emojiList);
        }
    }
    

    return (
    <div>
        <button onClick={handleClickOpen}>😀</button>
        
        {isOpen? (
                <div>
                    <EmojiSearch onSearch={handleSearch}/>
                    <div>
                        {emojis.map((emoji) => (
                            <div key={emoji.Symbol}>{emoji.Symbol}</div>
                        ))}
                    </div>
                </div>) : ("")}
    </div>
    );
}

export default forwardRef(EmojiPicker);