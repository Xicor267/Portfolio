import { Flex, Image, Modal } from 'antd';
import { FC, ReactNode } from 'react';
import './ProjectCard.scss';

interface IProjectCard {
  title: string;
  imageUrl: string;
  isOpen?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  content?: ReactNode;
}

export const ProjectCard: FC<IProjectCard> = (props) => {
  return (
    <>
      <Flex vertical={true} justify="center" align="center" className="project-card-custom">
        <div className="project-card-image">
          <Image src={props.imageUrl} alt='' />
        </div>
        <div className="project-card-text" onClick={props.onClick}>
          {props.title}
        </div>
      </Flex>
      <Modal
        style={{ marginTop: "3rem" }}
        title={props.title}
        centered
        open={props.isOpen}
        onOk={props.onClose}
        onCancel={props.onClose}
        width={800}
      >
        {props.content}
      </Modal>
    </>
  );
};