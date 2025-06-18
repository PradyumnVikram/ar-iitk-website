'use client';

import FooterWithMap from 'components/footer';
import "./page.module.css";
import timelineElements from "./timelineElements";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function Page() {
  let Iconstyle ={background: "#06D6A0"};
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <div>
            <h1 className="title">Timeline</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        return (
                            <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={Iconstyle}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <p id="description">
                                    {element.description}
                                </p>

                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </div>
      </section>

      {/* Footer Section - Remove wrapper and minHeight */}
      <FooterWithMap />
    </main>
  );
}
