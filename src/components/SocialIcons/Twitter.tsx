import React from "react";

import CircleIcon from "components/CircleIcon";

type Props = {
  userName: string;
};

const Twitter = ({ userName }: Props) => (
  <CircleIcon href={`https://twitter.com/${userName}`} iconName="TwitterIcon" />
);

export default Twitter;
