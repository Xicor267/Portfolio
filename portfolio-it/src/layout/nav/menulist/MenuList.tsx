import { Menu, MenuProps } from 'antd';
import React, { FC } from 'react';
import { ENav } from '../../../enum/nav/ENav';
import { getContextMenuNavItems } from '../../../mockdata/navData';
import './MenuList.scss';

interface IMenuList {
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

export const MenuList: FC<IMenuList> = (props) => {
  const items = getContextMenuNavItems();

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log('props.homeRef', props.homeRef)

  const onClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case ENav.NavHome:
        handleScroll(props.homeRef);
        break;
      case ENav.NavAbout:
        handleScroll(props.aboutRef);
        break;
      case ENav.NavService:
        handleScroll(props.serviceRef);
        break;
      case ENav.NavSkill:
        handleScroll(props.skillRef);
        break;
      case ENav.NavEducation:
        handleScroll(props.educationRef);
        break;
      case ENav.NavCertificate:
        handleScroll(props.certificateRef);
        break;
      case ENav.NavExperience:
        handleScroll(props.experienceRef);
        break;
      case ENav.NavProject:
        handleScroll(props.projectRef);
        break;
      case ENav.NavContact:
        handleScroll(props.contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <Menu
      className="menu-list"
      onClick={onClick}
      style={{ background: "#f2f3f7" }}
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['home']}
      mode="inline"
      items={items}
    />
  )
}