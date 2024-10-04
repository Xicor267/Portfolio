import { Flex } from 'antd';
import { FC, ReactNode } from 'react';
import { useLanguage } from '../../hook/useLanguages';
import "./SkillCard.scss"

interface ISkillCard {
  icon?: ReactNode;
  name: string;
}

export const SkillCard: FC<ISkillCard> = (props) => {
  const { i18n } = useLanguage()

  return (
    <Flex vertical={false} gap={"2rem"} align='center' className="skillcard">
      <div className="skillcard-icon">
        {props.icon}
      </div>
      <div className="skillcard-name">
        {i18n(props.name)}
      </div>
    </Flex>
  )
}
