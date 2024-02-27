import { useState } from "react";
import "./Banner.css";

function Banner() {
  const [value, setValue] = useState("");
 
  return (
    <div className="Banner">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }} 
        placeholder="input text here"
      />
      <div id="value">{value}</div>
    </div>
  );
}

export default Banner;
