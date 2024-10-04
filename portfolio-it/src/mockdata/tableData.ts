import { TableProps } from 'antd';
import { useLanguage } from '../hook/useLanguages';

export interface DataType {
  key: string;
  customer: string;
  individual?: string;
  tenant?: string
}

const getShareBlogData = (): DataType[] => {
  const { i18n } = useLanguage();

  return [
    {
      key: "1",
      customer: i18n("portfolio.page.project.customer.desc"),
      individual: i18n("portfolio.page.project.description"),
    },
    {
      key: "2",
      customer: i18n("portfolio.page.project.team_size"),
      individual: i18n("portfolio.page.project.team_size.number"),
    },
    {
      key: "3",
      customer: i18n("portfolio.page.project.position"),
      individual: i18n("portfolio.page.project.position.developer"),
    },
    {
      key: "4",
      customer: i18n("portfolio.page.project.responsibilities"),
      individual: i18n("portfolio.page.project.responsibilities.details"),
    },
    {
      key: "5",
      customer: i18n("portfolio.page.project.technologies"),
      individual: i18n("portfolio.page.project.technologies.details"),
    },
    {
      key: "6",
      customer: i18n("portfolio.page.project.link_reference"),
      individual: i18n("portfolio.page.project.link_reference.project"),
    },
  ];
};

const getShareBlogColumns = (): TableProps<DataType>['columns'] => {
  const { i18n } = useLanguage();

  return [
    {
      title: i18n("portfolio.page.project.customer"),
      dataIndex: "customer",
      key: "customer",

    },
    {
      title: i18n("portfolio.page.project.customer.individual"),
      dataIndex: "individual",
      key: "individual",
    },
  ];
}

const getTygraphData = (): DataType[] => {
  const { i18n } = useLanguage();

  return [
    {
      key: "1",
      customer: i18n("portfolio.page.project.customer.desc"),
      tenant: i18n("portfolio.page.project.description.tygraph"),
    },
    {
      key: "2",
      customer: i18n("portfolio.page.project.team_size"),
      tenant: i18n("portfolio.page.project.team_size.tygraph"),
    },
    {
      key: "3",
      customer: i18n("portfolio.page.project.position"),
      tenant: i18n("portfolio.page.project.position.tygraph"),
    },
    {
      key: "4",
      customer: i18n("portfolio.page.project.responsibilities"),
      tenant: i18n("portfolio.page.project.responsibilities.tygraph"),
    },
    {
      key: "5",
      customer: i18n("portfolio.page.project.technologies"),
      tenant: i18n("portfolio.page.project.technologies.tygraph"),
    },
    {
      key: "6",
      customer: i18n("portfolio.page.project.link_reference"),
      tenant: i18n("portfolio.page.project.link_reference.tygraph"),
    },
  ];
};

const getTygraphColumns = (): TableProps<DataType>['columns'] => {
  const { i18n } = useLanguage();

  return [
    {
      title: i18n("portfolio.page.project.customer"),
      dataIndex: "customer",
      key: "customer",

    },
    {
      title: i18n("portfolio.page.project.customer.tygraph"),
      dataIndex: "tenant",
      key: "tenant",
    },
  ];
}

export {
  getShareBlogData,
  getShareBlogColumns,
  getTygraphData,
  getTygraphColumns
};
