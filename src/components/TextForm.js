import React,{useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextForm(props) {

    const [text,setText] = useState('Enter text here...'); // Hook function
    const {speak} = useSpeechSynthesis();   {/**for listen the speech */} 

    const handleupclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();  //change into uppercase
        setText(newText);
    }

    const handledownclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();  //change into uppercase
        setText(newText);
    }

    const handleonchange = () => {   
        console.log("On Change");
        setText(event.target.value); //with the help of this syntax you can modify the value after set this ...
    }

    const handlespeech = () => {   // listen our written text 
        speak({text:text});
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); //for copy the text written in textbox
    }

    const handleclear = () => {
        setText("")
    }

    const handlesapce = () => {
        let newText = text.split(/[ ]+/);        // using regular expression
        setText(newText.join(" "));
    }

    return (
        <>
        <div className='container'>
            <h2>{props.heading}- <br></br></h2>
            {/* {text} // default text is "Enter text here" */}
            <center>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode ==='light'?'white':'grey'}} onChange={handleonchange} id="myBox" rows="5"></textarea>
                </div>
            </center>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button className={`btn btn-${props.mode === 'light' ? 'success' : 'info'} btn-sm`} onClick={handleupclick}>Uppercase</button>  {/*to convert uppercase */}
            <button className={`btn btn-${props.mode === 'light' ? 'success' : 'info'} btn-sm`} onClick={handledownclick}>Lowercase</button>  {/*to convert lowercase */}
            <button className={`btn btn-${props.mode === 'light' ? 'success' : 'info'} btn-sm`} onClick={handlespeech}>Listen</button>  {/*to listen the text */}
            <button className={`btn btn-${props.mode === 'light' ? 'success' : 'info'} btn-sm`} onClick={handleCopy}>Copy</button>  {/*to listen the text */}
            <button className={`btn btn-${props.mode === 'light' ? 'success' : 'info'} btn-sm`} onClick={handlesapce}>Remove Extra-space</button>  {/*to listen the text */}
            <button className="btn btn-danger btn-sm" onClick={handleclear}>Clear</button>  {/*clear text */}
            </div>
        </div>

        <div className="container my-3">  {/*// my-3 is bootstrap class */}
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} character</p>
            <p>Time : {0.008 * text.split(" ").length} min</p>
        </div>
        </>
    )
}
