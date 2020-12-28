import React from "react";

import CircleIcon from "components/CircleIcon";

type Props = {
  userName: string;
};

const Medium = ({ userName }: Props) => (
  <CircleIcon href={`https://medium.com/@${userName}`} iconName="MediumIcon" />
);

export default Medium;
