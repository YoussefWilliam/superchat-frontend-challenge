import React from "react";
import { colorLibrary } from "../../constants/colorTypes";
import ColorLabel from "./ColorLabel";

interface Props {
  title: string;
  setColorSelected: any;
}

const ColorPicker: React.FC<Props> = ({ setColorSelected, title }) => {
  return (
    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">{title}</h2>
      <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
        <div>
          <div className="flex items-center gap-8">
            {colorLibrary.map((color) => {
              const { id, name, className } = color || {};
              return (
                <ColorLabel
                  setColorSelected={setColorSelected}
                  id={id}
                  name={name}
                  className={className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
