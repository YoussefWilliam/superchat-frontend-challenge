import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContributerInfo from "../../common/ContributerInfo";
import Spinner from "../../common/Spinner";
import { useAppSelector } from "../../redux/hooks";
import { fetchContributes, contributorsDetailsInfo } from "./contributersSlice";

interface Props {
  title: string;
  username: string;
  reponame: string;
}
const Contributers: React.FC<Props> = ({ title, username, reponame }) => {
  const dispatch = useDispatch();
  const fetchedData = useAppSelector(contributorsDetailsInfo);
  useEffect(() => {
    dispatch(fetchContributes({ username, reponame }));
  }, [dispatch,reponame, username]);

  const { data, status } = fetchedData || {};
  const contributerArray = data?.slice(0, 10);

  return status === "loading" ? (
    <Spinner/>
  ) : (
    <div className="shadow-lg rounded-xl w-full p-2 bg-white dark:bg-gray-800 relative overflow-hidden">
      <p className="text-gray-600 dark:text-white text-xl font-medium mb-6">
        {title}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {contributerArray && contributerArray?.map((item: any) => {
          const { avatar_url, html_url, login } = item || {};
          return (
            <ContributerInfo
              avatar_url={avatar_url}
              html_url={html_url}
              login={login}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contributers;
