import { Flex, Image, Typography } from 'antd';
import { FC, useEffect } from 'react';
import background from "../../../assets/images/background.jpg";
import { useLanguage } from '../../../hook/useLanguages';
import "./Home.scss";

const { Text } = Typography;

export const Home: FC = () => {
  const { i18n } = useLanguage();

  useEffect(() => {
    const texts = document.querySelectorAll('.home-my-name-text');
    texts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('visible');
      }, index * 700);
    });
  }, []);

  return (
    <div className="home">
      <div className="home-img">
        <Image
          className="home-img-detail"
          src={background}
          alt=""
          style={{ width: "100%", borderRadius: "0.5rem" }}
        />
      </div>
      <Flex vertical className="home-my-name">
        <Text className="home-my-name-text">{i18n("portfolio.page.home.hi")}</Text>
        <Text className="home-my-name-text">{i18n("portfolio.page.home.myname")}</Text>
      </Flex>
    </div>
  )
}
