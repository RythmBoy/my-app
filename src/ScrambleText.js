// ScrambleText.js 
import React, { useState } from "react"; 
 
function scrambleCase(str) { 
  let result = ""; 
  for (let i = 0; i < str.length; i++) { 
    let char = str[i]; 
    if (Math.random() < 0.5) { 
      char = char.toUpperCase(); 
    } else { 
      char = char.toLowerCase(); 
    } 
    result += char; 
  } 
  return result; 
} 
 
export default function ScrambleText() { 
  const [inputText, setInputText] = useState(""); 
  const [scrambledText, setScrambledText] = useState(""); 
 
  function handleInputChange(event) { 
    setInputText(event.target.value); 
    setScrambledText(scrambleCase(event.target.value)); 
  } 

  function handleCopyClick() { 
    navigator.clipboard.writeText(scrambledText); 
  } 

 
  return ( 
    <div> 
      <input type="text" onChange={handleInputChange} /> 
      <p>{scrambledText}</p> 
      <button onClick={handleCopyClick}>Copy to clipboard</button> 
    </div> 
  ); 
} 