import React from "react";
import { iconLibrary } from "../constants/iconTypes";
import ImageAnchertag from "./ImageAnchertag";

interface Props {
  title: string;
  imageSelected: number;
  setImageSelected: any;
}
const IconPicker: React.FC<Props> = ({
  title,
  imageSelected,
  setImageSelected,
}) => {
  return (
    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">{title}</h2>
      <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
        <div>
          <div className="flex -space-x-2">
            {iconLibrary.map((icon) => {
              const { id, src, alt } = icon || {};
              return (
                <ImageAnchertag
                  imageSelected={imageSelected}
                  setImageSelected={setImageSelected}
                  index={id}
                  src={src}
                  alt={alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
