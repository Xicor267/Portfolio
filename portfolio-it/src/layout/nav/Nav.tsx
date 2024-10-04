import { Flex } from 'antd';
import { FunctionComponent } from 'react';
import './Nav.scss';
import { Avatar } from './avatar/Avatar';
import { Copyright } from './copyright/Copyright';
import { MenuList } from './menulist/MenuList';

interface INav {
  homeRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  serviceRef: React.RefObject<HTMLElement>;
  skillRef: React.RefObject<HTMLElement>;
  educationRef: React.RefObject<HTMLElement>;
  certificateRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export const Nav: FunctionComponent<INav> = (props) => {
  return (
    <Flex vertical gap={"large"} className="nav">
      <Avatar />
      <MenuList {...props} />
      <Copyright />
    </Flex>
  )
}