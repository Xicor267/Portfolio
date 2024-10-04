import { CodeOutlined, LaptopOutlined, ShopOutlined } from '@ant-design/icons'
import { Flex, Timeline } from 'antd'
import { FC } from 'react'
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { useLanguage } from '../../../hook/useLanguages'
import "./Experience.scss"

export const Experience: FC = () => {
  const {i18n} = useLanguage()

  const getTimelineData = [
    {
      color: '#2c98f0',
      dot: <CodeOutlined  style={{ fontSize: 40 }} />,
      children: (
        <div>
          <h4>{i18n("portfolio.page.experience.junior.duration")}</h4>
          <p><strong>{i18n("portfolio.page.experience.junior.company")}</strong></p>
          <p><strong>{i18n("portfolio.page.experience.junior.title")}</strong></p>
          <p>
            {i18n("portfolio.page.experience.junior.description")}
          </p>
        </div>
      )
    },
    {
      color: '#ec5453',
      dot: <LaptopOutlined  style={{ fontSize: 40 }} />,
      children: (
        <div>
          <h4>{i18n("portfolio.page.experience.intern.duration")}</h4>
          <p><strong>{i18n("portfolio.page.experience.intern.company")}</strong></p>
          <p><strong>{i18n("portfolio.page.experience.intern.title")}</strong></p>
          <p>
            {i18n("portfolio.page.experience.intern.description")}
          </p>
        </div>
      )
    },
    {
      color: '#f9bf3f',
      dot: <ShopOutlined  style={{ fontSize: 40 }} />,
      children: (
        <div>
          <h4>{i18n("portfolio.page.experience.grocery.duration")}</h4>
          <p><strong>{i18n("portfolio.page.experience.grocery.company")}</strong></p>
          <p><strong>{i18n("portfolio.page.experience.grocery.title")}</strong></p>
          <p>
            {i18n("portfolio.page.experience.grocery.description")}
          </p>
        </div>
      )
    }
  ]

  return (
    <Flex vertical gap={"1rem"} className="experience">
      <CategoryName
        name="portfolio.page.experience"
        desc="portfolio.page.experience.desc"
      />
      <div className="experience-timeline">
        <Timeline
          items={getTimelineData}
        />
      </div>
    </Flex>
  )
}