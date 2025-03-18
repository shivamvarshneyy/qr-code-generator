import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(word)}&size=300x300&bgcolor=${bgColor}`);
  }, [word, bgColor]);
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text to encode" />
          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" defaultValue="#ffffff" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode" target='_blank'>
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
