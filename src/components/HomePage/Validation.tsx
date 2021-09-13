import React from 'react'

interface Props{
    isValid: boolean;
    title: string;
}
const Validation: React.FC<Props> = ({ title, isValid }) => {
    return (
      <div className="w-full px-4 pb-4 mr-auto text-gray-500 md:w-1/3">
        {!isValid && (
          <div className="w-full py-2 text-red-600">
              {title}
          </div>
        )}
      </div>
    );
}

export default Validation
