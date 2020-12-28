import React from "react";

import Icon from "components/Icon";

import "./IconText.scss";

type Props = {
  iconName: string;
  text: string;
};

const IconText = ({ iconName, text }: Props) => {
  return (
    <span className="icon-text">
      <Icon className="icon" iconName={iconName} />
      {text}
    </span>
  );
};

export default IconText;
