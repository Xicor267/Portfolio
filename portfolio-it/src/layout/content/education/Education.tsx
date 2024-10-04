import { Flex } from 'antd'
import { FC } from 'react'
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { CollapseCustom } from '../../../component/collapse/Collapse'
import { useLanguage } from '../../../hook/useLanguages'
import "./Education.scss"

export const Education: FC = () => {
  const { i18n } = useLanguage()

  const getEducationData = [
    {
      key: "edu1",
      label: "portfolio.page.education.label",
      children: (
        <div>
          <h4>{i18n("portfolio.page.education.label")}</h4>
          <p><strong>{i18n("portfolio.page.education.major")}</strong></p>
          <p><strong>{i18n("portfolio.page.education.duration")}</strong></p>
          <p>
            {i18n("portfolio.page.education.description")}
          </p>
          <p>
            {i18n("portfolio.page.education.projects")}
          </p>
          <p>
            {i18n("portfolio.page.education.extracurricular")}
          </p>
          <p>
            {i18n("portfolio.page.education.conclusion")}
          </p>
        </div>
      )
    }
  ]

  return (
    <Flex vertical gap={"1rem"} className="education">
      <CategoryName
        name="portfolio.page.education"
        desc="portfolio.page.education"
      />
      <div className="education-card">
        <CollapseCustom
          item={getEducationData}
        />
      </div>
    </Flex>
  )
}