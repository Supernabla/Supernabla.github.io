import React from "react";
import { Row, Col } from "react-bootstrap";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import TimelineItem from "components/TimelineItem";
import nl2br from "utils/nl2br";

import "./Timeline.scss";

export type TimelineItemProps = React.ComponentProps<typeof TimelineItem>;

type Props = {
  className?: string;
  frontmatter: {
    anchor: string;
    header: string;
    subheader?: string;
    timeLineItems: Array<TimelineItemProps>;
  };
};

const Timeline = ({
  className,
  frontmatter: { anchor, header, subheader, timeLineItems },
}: Props) => {
  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row>
        <Col lg={12}>
          <ul className="timeline">
            {timeLineItems.map(
              (
                {
                  imageFileName,
                  imageContent,
                  header: itemHeader,
                  subheader: itemSubheader,
                  content,
                },
                ind,
              ) => (
                <TimelineItem
                  invert={ind % 2 === 1}
                  key={header}
                  imageFileName={imageFileName}
                  header={itemHeader}
                  subheader={itemSubheader}
                  content={content}
                  imageContent={
                    !imageFileName &&
                    imageContent && (
                      <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }}
                      />
                    )
                  }
                />
              ),
            )}
          </ul>
        </Col>
      </Row>
    </PageSection>
  );
};

Timeline.defaultProps = {
  className: undefined,
};

export default Timeline;
