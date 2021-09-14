import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import ErrorPage from "../ErrorPage/ErrorPage";
import { fetchRepoDetails, repoDetailsInfo } from "../HomePage/landingPageSlice";
import cx from "classnames";
import { colorLibrary } from "../../constants/colorTypes";
import { iconLibrary } from "../../constants/iconTypes";
import Spinner from "../../common/Spinner";
import DetailsContainer from "../../common/DetailsContainer";
import { repoPage } from "../../constants/wording";
import RepoTitle from "./RepoTitle";
import StarsCounter from "./StarsCounter";
import ImageContainer from "../../common/ImageContainer";
import Contributers from "./ContributersPage";


const RepoDetails: React.FC = () => {
  const { username, reponame, color, image } = useParams<any>();
  const dispatch = useDispatch();
  const fetchedData = useAppSelector(repoDetailsInfo);
  const [colorSelected, setColorSelected] = useState<string | any>("");
  const [imageSelected, setImageSelected] = useState<string | any>("");

  useEffect(() => {
    dispatch(fetchRepoDetails({ username, reponame }));
  }, [dispatch, username, reponame]);

  useEffect(() => {
    setColorSelected(colorLibrary.find((item) => item.id === color)?.className);
    setImageSelected(iconLibrary.find((item) => item.id.toString() === image));
  }, [color, image]);

  const backgroundColor = `bg-${colorSelected}`;
  const textColor = `text-${colorSelected}`;

  const { data, status } = fetchedData || {};

  const { description, language, name, stargazers_count } = data || {};

  return status === "loading" ? (
    <Spinner />
  ) : data?.message === "Not Found" ? (
    <ErrorPage />
  ) : (
    <div className={cx("p-6", backgroundColor)}>
      <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <RepoTitle
          title={repoPage.REPO_DETILS}
          repoName={name}
          textColor={textColor}
        />

        <div className="flex flex-wrap my-12 dark:text-white">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <DetailsContainer
              textColor={textColor}
              title={repoPage.AUTHOR_NAME}
              content={username}
            />
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <DetailsContainer
              textColor={textColor}
              title={repoPage.REPO_DESCRIPTION}
              content={description}
            />
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <DetailsContainer
              textColor={textColor}
              title={repoPage.PROGRAMMING}
              content={language}
            />
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <StarsCounter
              textColor={textColor}
              title={repoPage.NUMBER_STARS}
              stargazers_count={stargazers_count}
              backgroundColor={backgroundColor}
            />
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <ImageContainer imageSelected={imageSelected} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <Contributers
              title={repoPage.CONTRIBUTERS}
              username={username}
              reponame={reponame}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
