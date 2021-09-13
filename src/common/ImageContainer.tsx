import React from "react";
interface Props {
  imageSelected: any;
}
const ImageContainer: React.FC<Props> = ({ imageSelected }) => {
  const { src, alt } = imageSelected || {};
  return (
    <div className="flex items-center justify-center mb-6">
      <img
        className="inline-block h-40 w-40 rounded-full object-cover ring-2 ring-white"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageContainer;
