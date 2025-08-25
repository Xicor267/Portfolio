import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import { useLanguage } from '../../../hook/useLanguages';

export const DownloadCVButton: FC = () => {
  const cvFilePath = '/CV.pdf';
  const { i18n } = useLanguage();

  return (
    <Button
      type="primary"
      icon={<DownloadOutlined />}
      href={cvFilePath}
      download="NGUYEN-PHUONG-NAM-DEV-CV.pdf"
      style={{ marginTop: '0.5rem' }}
    >
      {i18n("portfolio.page.download.my.cv")}
    </Button>
  );
};
