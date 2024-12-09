import React from "react";



function Image(props) {
  return (
    <div className={props.size}>
      <img
        src={props.src}
        alt={props.alt}
        style={{ width: "100%", borderRadius: "12px" }}
      />
    </div>
  );
}

export default Image;
