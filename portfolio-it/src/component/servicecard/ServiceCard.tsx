import React, { ReactNode } from 'react';
import { useLanguage } from '../../hook/useLanguages';
import './ServiceCard.scss';

interface ServiceCardCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardCardProps> = (props) => {
  const { i18n } = useLanguage()

  return (
    <div className="innovative-ideas-card">
      <div className="hexagon">
        <div className="icon-wrapper">
          {props.icon}
        </div>
      </div>
      <h3 className="card-title">{i18n(props.title)}</h3>
      <p className="card-description">{i18n(props.description)}</p>
    </div>
  );
};

export default ServiceCard;