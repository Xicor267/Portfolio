import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { useLanguage } from '../../hook/useLanguages';
import "./CategoryName.scss";

interface ICategoryName {
  name?: string;
  desc?: string;
}

const { Text } = Typography;

export const CategoryName: FC<ICategoryName> = (props) => {
  const { i18n } = useLanguage()

  return (
    <Flex vertical className="category-name">
      <Text type={"secondary"} className="category-title">
        {i18n(props.name || "")}
      </Text>
      <Text className="category-desc">
        {i18n(props.desc || "")}
      </Text>
    </Flex>
  )
}
