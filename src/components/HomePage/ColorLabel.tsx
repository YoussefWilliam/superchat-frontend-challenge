import React from "react";
import cx from "classnames";

interface Props {
  id: string;
  setColorSelected: any;
  name: string;
  className: string;
}
const ColorLabel: React.FC<Props> = ({
  id,
  setColorSelected,
  name,
  className,
}) => {
  const textColor = `text-${className}`
  return (
    <label
      className="inline-flex items-center  cursor-pointer"
      onClick={() => setColorSelected(id)}
    >
      <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" />
      <span className={cx("ml-1", textColor)}>{name}</span>
    </label>
  );
};

export default ColorLabel;
