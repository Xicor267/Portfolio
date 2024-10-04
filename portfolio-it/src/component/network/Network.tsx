import { FC, ReactNode } from 'react';
import { useLanguage } from '../../hook/useLanguages';
import "./Network.scss";
import { Flex } from 'antd';

interface INetworkCard {
  icon?: ReactNode;
  link?: string;
  name?: string;
}

export const Network: FC<INetworkCard> = (props) => {
  const {i18n} = useLanguage()
  
  return (
    <Flex vertical={false} gap={"0.5rem"} align='center' className="network-card">
      <div className="network-icon">{props.icon}</div>
      <a href={props.link} rel="noopener noreferrer" target="_blank" className='nextwork-link'>
        {i18n(props.name || "")}
      </a>
    </Flex>
  )
}
