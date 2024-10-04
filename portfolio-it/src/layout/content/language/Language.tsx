import { Button, Dropdown, Flex, MenuProps } from 'antd';
import { FC } from 'react';
import en from "../../../assets/images/united-kingdom.png";
import vi from "../../../assets/images/vietnam.png";
import { useLanguage } from '../../../hook/useLanguages';
import "./Language.scss"

interface ILanguage {

}

export const Language: FC<ILanguage> = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string): void => {
    setLanguage(value);
  };

  const items: MenuProps['items'] = [
    {
      key: 'en',
      label: 'English',
      onClick: () => handleLanguageChange('en'),
      icon: <img src={en} alt='' />
    },
    {
      key: 'vi',
      label: 'Vietnamese',
      onClick: () => handleLanguageChange('vi'),
      icon: <img src={vi} alt='' />
    },
  ];

  return (
    <Flex vertical={false} justify="flex-end" className="language-option">
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Button style={{ width: 145, marginTop: "0.5rem" }}>
          {language === "en" ? <img src={en} alt='' /> : <img src={vi} alt='' />} {language === "en" ? "English" : "Vietnamese"}
        </Button>
      </Dropdown>
    </Flex>
  );
};