import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import { useLanguage } from '../../../hook/useLanguages';
import "./DownloadCVButton.scss";

export const DownloadCVButton: FC = () => {
  const cvFilePath = '/CV.pdf';
  const { i18n } = useLanguage();

  const handleShowBtnSmallScreen = () => {
    if (window.innerWidth < 960) {
      return ""
    }
    i18n("portfolio.page.download.my.cv")
  }

  return (
    <Button
      className='download-button'
      type="primary"
      icon={<DownloadOutlined />}
      href={cvFilePath}
      download="NGUYEN-PHUONG-NAM-SOFTWARE-ENGINEER-CV.pdf"
      style={{ marginTop: '0.5rem' }}
    >
      {handleShowBtnSmallScreen()}
    </Button>
  );
};
