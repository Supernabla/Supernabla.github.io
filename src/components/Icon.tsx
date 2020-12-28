import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AllIcons from "components/AllIcons";

type Props = { iconName: string } & Omit<React.ComponentProps<typeof FontAwesomeIcon>, "icon">;

const Icon = ({ iconName, ...restProps }: Props) => {
  const key = iconName as keyof typeof AllIcons;
  if (!key) {
    throw new Error(`icon "${iconName}" is not defined in src/components/AllIcons.jsx`);
  }

  return <FontAwesomeIcon icon={AllIcons[key]} {...restProps} />;
};

export default Icon;
