import React from "react";
import cx from "classnames";
interface Props {
  title: string;
  repoName: string;
  textColor: string;
}
const RepoTitle: React.FC<Props> = ({ title, repoName, textColor }) => {
  return (
    <div className="mb-16 text-center">
      <h2
        className={cx(
          "text-base font-semibold tracking-wide uppercase",
          textColor
        )}
      >
        {title}
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {repoName}
      </p>
    </div>
  );
};

export default RepoTitle;
