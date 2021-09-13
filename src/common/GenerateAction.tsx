import React from "react";

interface Props {
  onGeneratingLink: () => void;
  isGenerated: boolean;
  link: any;
  title: string;
}
const GenerateAction: React.FC<Props> = ({
  onGeneratingLink,
  isGenerated,
  link,
  title
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto px-4 sm:px-6  lg:px-8 z-20">
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={(e) => {
                e.preventDefault();
                onGeneratingLink();
              }}
              type="button"
              className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
             {title}
            </button>
          </div>
        </div>
        {isGenerated && (
          <>
            <div className=" relative p-2 ">
              <div className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 hover:border-purple-600 focus:border-transparent">
                {link}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GenerateAction;
