import { Col, Row } from 'antd';
import { FunctionComponent, useRef } from 'react';
import "./Layout.scss";
import { Nav } from './nav/Nav';
import { Content } from './content/Content';

interface ILayout {

}

export const Layout: FunctionComponent<ILayout> = (props) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Row className="layout">
      <Col span={6}>
        <Nav 
          homeRef={homeRef}
          aboutRef={aboutRef}
          serviceRef={serviceRef}
          skillRef={skillRef}
          educationRef={educationRef}
          certificateRef={certificateRef}
          experienceRef={experienceRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      </Col>
      <Col span={18}>
        <Content 
          homeRef={homeRef}
          aboutRef={aboutRef}
          serviceRef={serviceRef}
          skillRef={skillRef}
          educationRef={educationRef}
          certificateRef={certificateRef}
          experienceRef={experienceRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      </Col>
    </Row>
  )
}
