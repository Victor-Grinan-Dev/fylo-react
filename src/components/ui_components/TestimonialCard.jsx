import React from "react";
import Image from "../../functions/Image";

const TestimonialCard = (props) => {
  const { name, position, text, image, theme } = props;
  const cardStyles = {
    dark: "bg-darkBlue3",
    light: "bg-gray-100",
  };
  return (
    <div
      className={`flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 ${cardStyles[theme]}`}
    >
      <p className="text-sm leading-5 md:text-lg">{text}</p>
      <div className="flex space-x-4">
 
                <Image type="user" name={image} />

              <div>
                <h5 className="text-sm font-semibold">{name}</h5>
                <p className="text-xs font-extralight">{position}</p>
              </div>
            </div>
    </div>
  );
};

export default TestimonialCard;
