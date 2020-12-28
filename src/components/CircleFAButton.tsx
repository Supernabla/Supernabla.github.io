import React from "react";

import Icon from "components/Icon";

import "./CircleFAButton.scss";

type Props = Omit<React.ComponentProps<typeof Icon>, "inverse" | "size">;

const CircleFAButton = ({ iconName, ...restProps }: Props) => {
  return (
    <div className="circle-fa-button">
      <Icon iconName={iconName} inverse size="4x" {...restProps} />
    </div>
  );
};

export default CircleFAButton;
