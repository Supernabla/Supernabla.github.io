import React from "react";

import CircleIcon from "components/CircleIcon";

type Props = {
  userName: string;
};

const Facebook = ({ userName }: Props) => (
  <CircleIcon href={`https://facebook.com/${userName}`} iconName="FacebookIcon" />
);

export default Facebook;
