import { Flex } from 'antd'
import { FC } from 'react'
import { useLanguage } from '../../../hook/useLanguages'
import "./Copyright.scss"

export const Copyright: FC = () => {
  const { i18n } = useLanguage();

  return (
    <Flex justify="center" className="portfolio-copyright">
      {i18n("portfolio.page.copyright")}
    </Flex>
  )
}
