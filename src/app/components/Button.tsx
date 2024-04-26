import React from "react";
interface ButtonProps {
  text: string;
  to: string;
}
const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <a
      href={to}
      className="text-sm font-semibold text-white bg-[#ED1C2E] py-2 px-4 rounded"
    >
      {text}
    </a>
  );
};
export default Button;
