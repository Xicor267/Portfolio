import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { CategoryName } from '../../../component/categoryname/CategoryName';
import { useLanguage } from '../../../hook/useLanguages';
import "./About.scss";
import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Network } from '../../../component/network/Network';

const { Text } = Typography;

export const About: FC = () => {
  const { i18n } = useLanguage();

  const getNetworkCard = [
    {
      icon: <LinkedinOutlined style={{ fontSize: 20 }} />,
      link: "https://www.linkedin.com/in/nam-nguyen-1a5206310/",
      name: "Nam Nguyen"
    },
    {
      icon: <GithubOutlined style={{ fontSize: 20 }} />,
      link: "https://github.com/Xicor267",
      name: "Xicor267"
    },
    {
      icon: <FacebookOutlined style={{ color: "#2c98f0", fontSize: 20 }} />,
      link: "https://www.facebook.com/profile.php?id=100015391801792",
      name: "Nguyen Nam"
    }
  ]

  return (
    <Flex vertical gap={"1rem"} className="about">
      <CategoryName
        name="portfolio.page.about"
        desc="portfolio.page.about.desc"
      />
      <Text type={"secondary"} className="about-details">
        {i18n("portfolio.page.about.details")}
      </Text>
      <Flex vertical={false} gap={"1.5rem"} className="about-netword-card">
        {getNetworkCard.map((item, index) => (
          <Network
            key={index}
            icon={item.icon}
            link={item.link}
            name={item.name}
          />
        ))}
      </Flex>
    </Flex>
  )
}