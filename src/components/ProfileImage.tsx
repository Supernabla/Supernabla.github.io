import React from "react";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./ProfileImage.scss";

type Props = {
  imageFileName: string;
  imageAlt?: string;
  imageCaption: string;
  imageSubCaption: string;
  social: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
};

const ProfileImage = ({
  imageFileName,
  imageAlt,
  imageCaption,
  imageSubCaption,
  social: { twitter, facebook, linkedin, github, medium },
}: Props) => {
  return (
    <div className="profile-image-container">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || imageCaption || imageSubCaption}
      />
      <h4>{imageCaption}</h4>
      <p className="text-muted">{imageSubCaption}</p>
      <div>
        {twitter && <SocialIcons.Twitter userName={twitter} />}
        {facebook && <SocialIcons.Facebook userName={facebook} />}
        {github && <SocialIcons.Github userName={github} />}
        {linkedin && <SocialIcons.Linkedin userName={linkedin} />}
        {medium && <SocialIcons.Medium userName={medium} />}
      </div>
    </div>
  );
};

ProfileImage.defaultProps = {
  imageAlt: undefined,
};

export default ProfileImage;
