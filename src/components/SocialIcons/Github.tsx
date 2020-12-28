import React from "react";

import CircleIcon from "components/CircleIcon";

type Props = {
  userName: string;
};

const Github = ({ userName }: Props) => (
  <CircleIcon href={`https://github.com/${userName}`} iconName="GithubIcon" />
);

export default Github;
