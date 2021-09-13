import React from "react";

interface Props {
  title: string;
}
const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
      <div className="max-w-sm mx-auto md:w-full md:mx-0">
        <div className="inline-flex items-center space-x-4">
          <h1 className="text-gray-600">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
