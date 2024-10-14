import { Flex } from 'antd'
import { FC } from 'react'
import "./Content.scss"
import { About } from './about/About'
import { Certificate } from './certificate/Certificate'
import { Contact } from './contact/Contact'
import { Education } from './education/Education'
import { Experience } from './experience/Experience'
import { Home } from './home/Home'
import { Project } from './project/Project'
import { Service } from './service/Service'
import { Skill } from './skill/Skill'
import { PageView } from './pageview/PageView'

interface IContent {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  serviceRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  certificateRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const Content: FC<IContent> = (props) => {
  return (
    <Flex vertical gap="3rem" className="content">
      <div ref={props.homeRef}>
        <Home />
      </div>
      <div ref={props.aboutRef}>
        <About />
      </div>
      <div ref={props.serviceRef}>
        <Service />
      </div>
      <div ref={props.skillRef}>
        <Skill />
      </div>
      <div ref={props.educationRef}>
        <Education />
      </div>
      <div ref={props.certificateRef}>
        <Certificate />
      </div>
      <div ref={props.experienceRef}>
        <Experience />
      </div>
      <div ref={props.projectRef}>
        <Project />
      </div>
      <div ref={props.contactRef}>
        <Contact />
      </div>
      <div>
        <PageView />
      </div>
    </Flex>
  );
};
