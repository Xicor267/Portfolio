import React, { FC, ReactNode } from 'react'
import { Collapse } from 'antd'
import "./Collapse.scss"
import { useLanguage } from '../../hook/useLanguages'

interface ICollapse {
  item: {
    key: string,
    label: string,
    children: ReactNode
  }[]
}

export const CollapseCustom: FC<ICollapse> = (props) => {
  const {i18n} = useLanguage()
  
  return (
    <div>
      {props.item.map((item, index) => (
        <Collapse
          key={index}
          collapsible="header"
          defaultActiveKey={props.item.map((item) => item.key)}
          items={[
            {
              key: item.key,
              label: i18n(item.label),
              children: item.children,
            },
          ]}
        />
      ))}
    </div>
  )
}
