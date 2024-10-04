import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Flex, Image, Space } from 'antd';
import React, { FC } from 'react';
import personalImage from "../../../assets/images/avatar-nam-nguyen.jpg";
import { useLanguage } from '../../../hook/useLanguages';
import "./Avatar.scss";

interface IAvatar {

}

export const Avatar: FC<IAvatar> = () => {
  const [current, setCurrent] = React.useState(0);
  const { i18n } = useLanguage();

  const imageList = [
    personalImage,
  ]

  const onDownload = () => {
    const url = imageList[current];
    const suffix = url.slice(url.lastIndexOf('.'));
    const filename = Date.now() + suffix;

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(blobUrl);
        link.remove();
      });
  };

  return (
    <Flex justify="center" align="center" vertical gap="small" className="portfolio-avatar">
      <Image.PreviewGroup
        preview={{
          toolbarRender: (
            _,
            {
              transform: { scale },
              actions: {
                onActive,
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
                onReset,
              },
            },
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <LeftOutlined onClick={() => onActive?.(-1)} />
              <RightOutlined onClick={() => onActive?.(1)} />
              <DownloadOutlined onClick={onDownload} />
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              <UndoOutlined onClick={onReset} />
            </Space>
          ),
          onChange: (index) => {
            setCurrent(index);
          },
        }}
      >
        {imageList.map((item) => (
          <Image key={item} src={item} width={200} style={{borderRadius: "50%", border: "2px solid #2c98f0"}}/>
        ))}
      </Image.PreviewGroup>
      <div className="portfolio-name">
        {i18n("portfolio.page.name")}
      </div>
      <div className="portfolio-job-title">
        {i18n("portfolio.page.job.title")}
      </div>
    </Flex>
  );
}
