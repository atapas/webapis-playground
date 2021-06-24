import React from 'react';

// apis
import { performCopy, performPaste } from './api';

const Clipboard = () => {

    return(

    <div className="flex-colums">
        <form>
            <label htmlFor="copy-input">Copy</label>
            <input 
                id="copy-input" 
                type="text" 
                name="copy" 
                placeholder="Write Something..."/>
            <button onClick={performCopy}>Copy</button>
        </form>

        <form>
            <label htmlFor="paste">Paste</label>
            <input
                id="paste-input"  
                type="text" 
                name="paste"
                readOnly />
            <button onClick={performPaste}>Paste</button>
        </form>
    </div>
    )
};

export default Clipboard;