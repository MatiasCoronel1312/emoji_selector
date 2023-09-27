import { useRef } from "react";
import EmojiPicker from "./emojiPickers";
import styles from "./emojiPickers.module.css";

export default function EmojiPickerInput() {
    const refInput = useRef(null);

    return ( 
            <div className={styles.container}>
                <input ref={refInput}/>
                <EmojiPicker ref={refInput} />
            </div>
        );
}