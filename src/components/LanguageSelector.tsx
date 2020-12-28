import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import clsx from "clsx";

import IconText from "components/IconText";

import getBaseUrl from "utils/getBaseUrl";

import "./LanguageSelector.scss";

type Props = {
  defaultLang: string;
  langKey: string;
  langTextMap: Record<string, string>;
};

const LanguageSelector = ({ defaultLang, langKey, langTextMap }: Props) => {
  return (
    <NavDropdown
      title={<IconText iconName="LanguageIcon" text={langTextMap[langKey]} />}
      id="language-dropdown"
      className="language-selector"
    >
      {Object.keys(langTextMap).map((key) => {
        return (
          <Link
            key={key}
            to={getBaseUrl(defaultLang, key)}
            className={clsx("dropdown-item", { active: key === langKey })}
          >
            {langTextMap[key]}
          </Link>
        );
      })}
    </NavDropdown>
  );
};

export default LanguageSelector;
