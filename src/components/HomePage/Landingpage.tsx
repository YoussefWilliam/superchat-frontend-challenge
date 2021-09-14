import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../common/InputField";
import Title from "./Title";
import { landingPage } from "../../constants/wording";
import ColorPicker from "./ColorPicker";
import GenerateAction from "../../common/GenerateAction";
import IconPicker from "../../common/IconPicker";
import Validation from "./Validation";

const Landingpage: React.FC = () => {
  const [isValid, setValidation] = useState(true);
  const [author, setAuthor] = useState<string>();
  const [repo, setRepo] = useState<string>();
  const [isGenerated, setIsGenerated] = useState(false);
  const [link, setLink] = useState<any>(null);
  const [imageSelected, setImageSelected] = useState<number>(1);
  const [colorSelected, setColorSelected] = useState<number>(1);

  const onGeneratingLink = () => {
    if (!author || !repo) {
      setValidation(false);
    } else {
      setIsGenerated(true);
      setValidation(true);
      setLink(
        <Link
          to={{
            pathname: `repos/${author}/${repo}/${colorSelected}/${imageSelected}`,
          }}
          target="_blank"
        >
          {window.location +
            `repos/${author}/${repo}/${colorSelected}/${imageSelected}`}
        </Link>
      );
    }
  };

  return (
    <section className="h-screen bg-gray-100 bg-opacity-50 p-4">
      <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <Title title={landingPage.CUSTOMIZE} />
        <div className="space-y-6 bg-white">
          <InputField
            handleOnChange={(e: any) => setAuthor(e.target.value)}
            text={landingPage.USERNAME}
            placeholder={landingPage.USERNAME_PLACEHOLDER}
          />
          <hr />
          <InputField
            handleOnChange={(e: any) => setRepo(e.target.value)}
            text={landingPage.REPONAME}
            placeholder={landingPage.REPONAME}
          />
          <hr />
          <ColorPicker
            title={landingPage.CHOOSE_COLOR}
            setColorSelected={setColorSelected}
          />
          <hr />
          <IconPicker
            title={landingPage.CHOOSE_ICON}
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
          />
          <hr />
          <GenerateAction
            onGeneratingLink={onGeneratingLink}
            isGenerated={isGenerated}
            link={link}
            title={landingPage.GENERATE}
          />
          <Validation isValid={isValid} title={landingPage.VALIDATION} />
        </div>
      </form>
    </section>
  );
};

export default Landingpage;
