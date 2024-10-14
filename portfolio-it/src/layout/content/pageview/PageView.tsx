import { Flex, Statistic, StatisticProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLanguage } from '../../../hook/useLanguages';
import "./PageView.scss";

export const PageView: FC = () => {
  const { i18n } = useLanguage();
  const [pageView, setPageview] = useState(0);

  useEffect(() => {
    const getPageView = localStorage.getItem("pageViews");

    if (getPageView) {
      setPageview(parseInt(getPageView, 10))
    }

    setPageview((prevPageView) => {
      const countUserVisit = prevPageView + 1;
      localStorage.setItem("pageViews", countUserVisit.toString())

      return countUserVisit;
    })
  }, [])

  const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp end={value as number} separator="," />
  );

  return (
    <Flex className='page-view'>
      <Statistic title={i18n("portfolio.page.page.view.user.visits")} value={pageView} formatter={formatter} />
    </Flex>
  )
}