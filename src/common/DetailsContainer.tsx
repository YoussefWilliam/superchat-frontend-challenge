import React, { Fragment } from "react";
import cx from "classnames";

interface Props {
  textColor: string;
  title: string;
  content: string;
}
const DetailsContainer: React.FC<Props> = ({ textColor, title, content }) => {
  return (
    <Fragment>
      <div className="flex items-center mb-6">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className={cx("h-6 w-6", textColor)}
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
        </svg>
        <div className="ml-4 text-xl">{title}</div>
      </div>
      <p className="leading-loose text-gray-500 dark:text-gray-200 text-xl">
        {content}
      </p>
    </Fragment>
  );
};

export default DetailsContainer;
