import { CheckOutlined } from '@ant-design/icons';
import { Col, Row, notification } from 'antd';
import { FunctionComponent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../redux/slice/notificationSlice';
import { RootState } from '../redux/store';
import "./Layout.scss";
import { Content } from './content/Content';
import { Nav } from './nav/Nav';

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
  const { message, description, visible } = useSelector((state: RootState) => state.notification);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (visible) {
      api.open({
        message,
        description,
        icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        onClose: () => dispatch(hideNotification()),
      });
    }
  }, [visible, api, message, description, dispatch]);

  return (
    <>
      {contextHolder}
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
    </>
  )
}
