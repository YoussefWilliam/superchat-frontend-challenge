import React from "react";
import cx from "classnames";

interface Props {
  imageSelected: number;
  setImageSelected: any;
  index: number;
  src: string;
  alt: string;
}
const ImageAnchertag: React.FC<Props> = ({
  imageSelected,
  setImageSelected,
  index,
  src,
  alt,
}) => {
  return (
    <a href="/#"
      className={cx(
        "hover:scale-150 hover:z-10 transform ease-in-out transition duration-500 cursor-pointer",
        imageSelected === index && "scale-150"
      )}
      onClick={(e) => {
        e.preventDefault();
        setImageSelected(index);
      }}
    >
      <img
        className="inline-block h-20 w-20 rounded-full object-cover ring-2 ring-white cursor-pointer"
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default ImageAnchertag;
