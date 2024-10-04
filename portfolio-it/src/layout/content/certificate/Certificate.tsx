import { Flex } from 'antd'
import { FC } from 'react'
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { CollapseCustom } from '../../../component/collapse/Collapse'
import { useLanguage } from '../../../hook/useLanguages'
import "./Certificate.scss"

export const Certificate: FC = () => {
  const { i18n } = useLanguage()

  const getEducationData = [
    {
      key: "cert1",
      label: i18n("portfolio.page.certification.b1.label"),
      children: (
        <div>
          <h4>{i18n("portfolio.page.certification.b1.title")}</h4>
          <p><strong>{i18n("portfolio.page.certification.b1.level")}:</strong> {i18n("portfolio.page.certification.b1.description")}</p>
          <p>{i18n("portfolio.page.certification.b1.details")}</p>
        </div>
      )
    }
  ];

  return (
    <Flex vertical gap={"1rem"} className="certificate">
      <CategoryName
        name="portfolio.page.certification"
        desc="portfolio.page.certification.desc"
      />
      <div className="certificate-card">
        <CollapseCustom
          item={getEducationData}
        />
      </div>
    </Flex>
  )
}