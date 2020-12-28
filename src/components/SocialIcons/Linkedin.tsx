import React from "react";

import CircleIcon from "components/CircleIcon";

type Props = {
  userName: string;
};

const Linkedin = ({ userName }: Props) => (
  <CircleIcon href={`https://linkedin.com/in/${userName}`} iconName="LinkedinIcon" />
);

export default Linkedin;
