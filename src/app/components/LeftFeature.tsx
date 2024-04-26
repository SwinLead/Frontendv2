import React from "react";
interface ButtonProps {
  heading: string;
  content: JSX.Element;
  img: string;
}
const LeftFeature: React.FC<ButtonProps> = ({ heading, content, img }) => {
  return (
    <div className="overflow-hidden bg-white py-4 sm:py-10">
      <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-6 md:gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            src={img}
            alt="Group image"
            className="ring-1 ring-gray-400/10 sm:w-[57rem]"
            width={2432}
            height={1442}
          />
          <div>
            <h2 className="sm: text-center lg:text-start text-2xl md:text-3xl font-medium tracking-tight text-gray-900 ">
              {heading}
            </h2>
            <p className="text-center lg:text-start mt-3 sm:mt-6 text-sm sm:text-md xl:text-lg lg:leading-6 xl:leading-8 text-gray-600 ">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftFeature;
