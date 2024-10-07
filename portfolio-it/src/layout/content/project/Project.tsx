import { Flex, Table } from 'antd'
import { FC, useState } from 'react'
import shareblog from "../../../assets/images/shareblog.png"
import tygraph from "../../../assets/images/tygraph.png"
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { ProjectCard } from '../../../component/projectcard/ProjectCard'
import { DataType, getShareBlogColumns, getShareBlogData, getTygraphColumns, getTygraphData } from '../../../mockdata/tableData'
import "./Project.scss"

export const Project: FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const getProjectCard = [
    {
      imageUrl: shareblog,
      title: "Share Blog Website ~ 03/2022 - 05/2022",
      content: <Table<DataType> columns={getShareBlogColumns()} dataSource={getShareBlogData()} />
    },
    {
      imageUrl: tygraph,
      title: "TyGraph Product ~ 09/2022 - Present",
      content: <Table<DataType> columns={getTygraphColumns()} dataSource={getTygraphData()} />
    },
  ];

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <Flex vertical gap={"1rem"} className="project">
      <CategoryName
        name="portfolio.page.project.name"
        desc="portfolio.page.project.desc"
      />
      <Flex vertical={false} gap={"1.5rem"} className="project-card">
        {getProjectCard.map((item, index) => (
          <ProjectCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            isOpen={openModalIndex === index}
            onClick={() => handleOpenModal(index)}
            onClose={handleCloseModal}
            content={item.content}
          />
        ))}
      </Flex>
    </Flex>
  );
}