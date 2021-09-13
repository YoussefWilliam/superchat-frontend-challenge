import React from "react";
interface Props {
  avatar_url: string;
  html_url: string;
  login: string;
}
const ContributerInfo: React.FC<Props> = ({avatar_url, login, html_url}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <a href={html_url} className="block relative" target="_blank" rel="noreferrer">
          <img
            alt="profile"
            src={avatar_url}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
      </div>
      <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
        {login}
      </span>
    </div>
  );
};

export default ContributerInfo;
