import { MenuProps } from 'antd';
import { useLanguage } from '../hook/useLanguages';
import { ENav } from '../enum/nav/ENav';

type MenuItem = Required<MenuProps>['items'][number];

export const getContextMenuNavItems = (): MenuItem[] => {
  const { i18n } = useLanguage();

  return [
    {
      key: ENav.NavHome,
      label: i18n("portfolio.page.nav.home"),
      // icon: <MailOutlined />,
    },
    {
      key: ENav.NavAbout,
      label: i18n("portfolio.page.about"),
      // icon: <AppstoreOutlined />,
    },
    {
      key: ENav.NavService,
      label: i18n("portfolio.page.service"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavSkill,
      label: i18n("portfolio.page.skills"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavEducation,
      label: i18n("portfolio.page.education"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavCertificate,
      label: i18n("portfolio.page.certification"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavExperience,
      label: i18n("portfolio.page.experience"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavProject,
      label: i18n("portfolio.page.project"),
      // icon: <SettingOutlined />,
    },
    {
      key: ENav.NavContact,
      label: i18n("portfolio.page.contact"),
      // icon: <SettingOutlined />,
    },
  ];
};