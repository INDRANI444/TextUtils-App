import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase()); // Convert text to uppercase
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update the text state with user input
  };

  const handleLoClick = () => {
    setText(text.toLowerCase()); // Convert text to lowercase
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearText = () => {
    setText(''); // Clear text by setting it to an empty string
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text); // Copy the text to the clipboard
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.split(/\s+/).join(' ').trim()); // Remove extra spaces
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState('');

  // Helper function to count characters excluding spaces
  const countCharactersWithoutSpaces = (text) => {
    return text.replace(/\s/g, '').length;
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words,{' '}
          {countCharactersWithoutSpaces(text)} characters (excluding spaces)
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
