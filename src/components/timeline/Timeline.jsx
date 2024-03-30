import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { FaGithub } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { GrUserExpert } from "react-icons/gr";
const Timeline = ({ data }) => {
  const edu = data.timeline.filter((item) => item.forEducation === true);
  const exp = data.timeline.filter((item) => item.forEducation === false);
  const sortedEduTimeline = edu.sort((a, b) => a.sequence - b.sequence);
  const sortedExpTimeline = exp.sort((a, b) => a.sequence - b.sequence);

  return (
    <div className="time-part">
      <div className="timeline-head">
        <h1>My TimeLine</h1>
      </div>

      <div className="timelines">
        <div className="edu-part">
          <div className="edutitle">
            Education <IoMdSchool />
          </div>
          <VerticalTimeline>
            {sortedEduTimeline.map((data) => (
              <VerticalTimelineElement
                key={data._id} // Don't forget to add a unique key for each element
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#126d694d", color: "#0fe4d9" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #126d694d",
                }}
                date={`${data.startDate.slice(0, 4)} - ${data.endDate.slice(
                  0,
                  4
                )}`}
                iconStyle={{ background: "#0f292f", color: "#0fe4d9" }}
                icon={<IoMdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.company_name}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.jobTitle}, {data.jobLocation}
                </h4>
                <p>{data.summary}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="exp-part">
          <div className="edutitle">
            Experience <GrUserExpert />
          </div>
          <VerticalTimeline>
            {sortedExpTimeline.map((data) => (
              <VerticalTimelineElement
                key={data._id} // Don't forget to add a unique key for each element
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#126d694d", color: "#0fe4d9" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #126d694d",
                }}
                date={`${data.startDate.slice(0, 4)} - ${data.endDate.slice(
                  0,
                  4
                )}`}
                iconStyle={{ background: "#0f292f", color: "#0fe4d9" }}
                icon={<GrUserExpert />}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.company_name}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.jobTitle}, {data.jobLocation}
                </h4>
                <p>{data.summary}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
