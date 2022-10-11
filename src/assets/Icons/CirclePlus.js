import React from "react";

const CirclePlus = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width ? width : "15"}
      fill="currentColor"
    >
      <path d="M352 232H280V160c0-13.26-10.74-24-23.1-24S232 146.7 232 160v72H160C146.7 232 136 242.7 136 256c0 13.25 10.75 24 24 24H232V352c0 13.25 10.75 24 24 24S280 365.3 280 352V280h72C365.3 280 376 269.3 376 256C376 242.7 365.3 232 352 232zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256S512 397.4 512 256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
    </svg>
  );
};
export default CirclePlus;
