import { Flex } from 'antd';
import { FC } from 'react';
import html from "../../../assets/images/html-5.png";
import js from "../../../assets/images/js.png";
import react from "../../../assets/images/react.png";
import scss from "../../../assets/images/sass.png";
import git from "../../../assets/images/social.png";
import ts from "../../../assets/images/typescript.png";
import { CategoryName } from '../../../component/categoryname/CategoryName';
import { SkillCard } from '../../../component/skillcard/SkillCard';
import "./Skill.scss";

export const Skill: FC = () => {
  const getServiceCard = [
    {
      icon: <img src={html} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.html.name",
    },
    {
      icon: <img src={scss} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.scss.name",
    },
    {
      icon: <img src={js} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.js.name",
    },
    {
      icon: <img src={ts} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.ts.name",
    },
    {
      icon: <img src={react} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.react.name",
    },
    {
      icon: <img src={git} style={{ width: 40, height: 40 }} alt='' />,
      name: "portfolio.page.card.skill.git.name",
    },
  ]

  return (
    <Flex vertical gap={"1rem"} className="skill">
      <CategoryName
        name="portfolio.page.skills.name"
        desc="portfolio.page.skills.desc"
      />
      <div className="skill-card">
        {getServiceCard.map((item, index) => (
          <SkillCard
            key={index}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </Flex>
  )
}
