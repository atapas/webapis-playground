
const performCopy = async(event) => {
    event.preventDefault();
    console.log(`Performing Copy to the Clipboard`);
    try {
        const copyText = document.getElementById('copy-input').value;
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(copyText);
            console.log(`The text '${copyText}' is in the Clipboard Now!`);
        } else {
            console.log(`Clipboard API is Not Supported`)
        }
    } catch (err) {
        console.error(`Failed to copy: ${err}`);
    }
}

const performPaste = async(event) => {
    event.preventDefault();
    console.log(`Performing Paste from the Clipboard`);
    try {
        
        if (navigator.clipboard) {
            const fromClipboard = await navigator.clipboard.readText();
            document.getElementById('paste-input').value = fromClipboard;
            console.log(`The text '${fromClipboard}' is pasted successfully!`);
        } else {
            console.log(`Clipboard API is Not Supported`)
        }
    } catch (err) {
        console.error(`Failed to copy: ${err}`);
    }
}

export { performCopy, performPaste};