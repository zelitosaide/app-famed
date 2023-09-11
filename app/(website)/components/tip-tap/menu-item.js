"use client";

import { useRef, useState } from "react";

export default function MenuItem({ icon, title, action, isActive = null, disabled = null}) {
  const ref = useRef();
  const [file, setFile] = useState(null);

  return title === "Image" ? (
    <button
      className={`menu-item ${isActive && isActive() ? ' is-active' : ''}`}
      title={title}
      disabled={disabled}
      onClick={function() {
        ref.current.click();
      }}
    >
      <input  
        type="file" 
        ref={ref} 
        style={{ display: "none"}} 
        onChange={function(e) {
          setFile(e.target.files[0]);
        }}
      />
      <i className={`ri-${icon}`} />
    </button>
  ) : (
    <button
      className={`menu-item ${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
      disabled={disabled}
    >
      <i className={`ri-${icon}`} />
    </button>
  );
}