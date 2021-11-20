import React from "react";
import "./Toggle.css";

interface TextareaProps {
  label: string;
}

export const Toggle = ({label, ...props }: TextareaProps) => {
  // --- YOUR CODE HERE ---

  return (
    <>
      <label className="Toggle">
          <input type="checkbox"></input>
          <span className="Slider"></span>
      </label>
      <span className="Label">{label}</span>
    </>
  );
};
