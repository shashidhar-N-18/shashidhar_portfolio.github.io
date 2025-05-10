import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                       <h3 className="vertical-timeline-element-title">B.E, KLE Technological University</h3>
            <h4 className="vertical-timeline-element-subtitle">Hubli, India</h4>
            <p>
              Computer Science Engineering with focus on full-stack development, ML, and networking.
            </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
             <h3 className="vertical-timeline-element-title">Tech & PR, Developers Student Club</h3>
            <h4 className="vertical-timeline-element-subtitle">KLE Tech</h4>
            <p>
              Managed branding, backend support, and developer engagement for club events and hackathons.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
           <h3 className="vertical-timeline-element-title">Media & Design Lead, Make in BVB</h3>
            <h4 className="vertical-timeline-element-subtitle">Hubli, India</h4>
            <p>
              Designed event graphics, handled video editing, and managed social media content for the fest.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder, Growmi</h3>
            <h4 className="vertical-timeline-element-subtitle">Hubli, India</h4>
            <p>
              Built and led a startup offering digital marketing and customer insights for local FMCG businesses.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;