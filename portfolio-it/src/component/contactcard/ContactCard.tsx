import { Flex } from 'antd';
import { FC, ReactNode } from 'react';
import './ContactCard.scss';

interface IContactCard {
  icon?: ReactNode;
  content?: string;
}

export const ContactCard: FC<IContactCard> = (props) => {
  return (
    <Flex vertical={false} gap={"1rem"} align='center' className="contact-card-custom">
      <div className="contact-card-icon">
        {props.icon}
      </div>
      <div className="contact-card-content">
        {props.content}
      </div>
    </Flex>
  )
}
