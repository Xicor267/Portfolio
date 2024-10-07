import { Button, Col, Row, notification } from 'antd';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../redux/slice/notificationSlice';
import { RootState } from '../redux/store';
import "./Layout.scss";
import { Content } from './content/Content';
import { Nav } from './nav/Nav';
import { LuMenuSquare } from "react-icons/lu";

interface ILayout {

}

export const Layout: FunctionComponent<ILayout> = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const { message, description, icon, visible } = useSelector((state: RootState) => state.notification);
  const [api, contextHolder] = notification.useNotification();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (visible) {
      api.open({
        message,
        description,
        icon,
        showProgress: true,
        onClose: () => dispatch(hideNotification()),
      });
    }
  }, [visible, api, message, description, dispatch]);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 956) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {contextHolder}
      {windowWidth <= 956 && (
        <Button
          className="menu-button"
          type="primary"
          onClick={toggleNav}
        >
          <LuMenuSquare style={{fontSize: 20}}/>
        </Button>
      )}
      <Row className="layout">
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          className={`nav-col ${isNavVisible ? "visible" : "hidden"}`}
        >
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
        <Col xs={24} sm={24} md={18} lg={18}>
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
    </>
  );
}
