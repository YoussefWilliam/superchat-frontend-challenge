import React from "react";

interface Props {
  text: string;
  placeholder: string;
  handleOnChange: (e:any) => any;
}

const InputField: React.FC<Props> = ({ text, handleOnChange, placeholder }) => {
  return (
    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">{text}</h2>
      <div className="max-w-sm mx-auto md:w-2/3">
        <div className=" relative ">
          <input
            type="text"
            id="text-input"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder={placeholder}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
    
  );
};

export default InputField;
