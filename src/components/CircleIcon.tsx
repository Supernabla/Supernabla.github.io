import React from "react";

import Icon from "components/Icon";

import "./CircleIcon.scss";

type Props = {
  href?: string;
  iconName: string;
};

const CircleIcon = ({ href, iconName }: Props) => (
  <a
    className="circle-icon"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={iconName}
  >
    <Icon iconName={iconName} />
  </a>
);

CircleIcon.defaultProps = {
  href: undefined,
};

export default CircleIcon;
