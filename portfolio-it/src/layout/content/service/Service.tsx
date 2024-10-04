import { AndroidOutlined, CodeOutlined, DatabaseOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { FC } from 'react'
import { CategoryName } from '../../../component/categoryname/CategoryName'
import ServiceCard from '../../../component/servicecard/ServiceCard'
import "./Service.scss"

export const Service: FC = () => {
  const getServiceCard = [
    {
      icon: <DatabaseOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: "portfolio.page.card.service.software.title",
      description: "portfolio.page.card.service.software.desc",
    },
    {
      icon: <CodeOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: "portfolio.page.card.service.webdesign.title",
      description: "portfolio.page.card.service.webdesign.desc",
    },
    {
      icon: <AndroidOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: "portfolio.page.card.service.application.title",
      description: "portfolio.page.card.service.application.desc",
    }
  ]

  return (
    <Flex vertical gap={"1rem"} className="service">
      <CategoryName
        name="portfolio.page.service.name"
        desc="portfolio.page.service.desc"
      />
      <Flex vertical={false} wrap justify="space-between" className="service-card">
        {getServiceCard.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Flex>
    </Flex>
  )
}
