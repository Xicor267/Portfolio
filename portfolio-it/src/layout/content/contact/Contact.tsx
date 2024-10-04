import { ContactsOutlined, PhoneOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input } from 'antd'
import { FC } from 'react'
import { FaRegMap } from "react-icons/fa6"
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { ContactCard } from '../../../component/contactcard/ContactCard'
import { useLanguage } from '../../../hook/useLanguages'
import "./Contact.scss"

export const Contact: FC = () => {
  const { i18n } = useLanguage();
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const getContactCard = [
    {
      icon: <ContactsOutlined style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: "nguyennamnvl267@gmail.com"
    },
    {
      icon: <PhoneOutlined style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: "+84372928669"
    },
    {
      icon: <FaRegMap style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: i18n("portfolio.page.contact.address")
    },
  ]

  return (
    <Flex vertical gap={"1rem"} className="contact">
      <CategoryName
        name="portfolio.page.contact"
        desc="portfolio.page.contact.name"
      />

      <Flex vertical={false} gap={"2rem"} align="center" className="contact-card">
        <Flex vertical gap={"2rem"}>
          {getContactCard.map((item, index) => (
            <ContactCard
              key={index}
              icon={item.icon}
              content={item.content}
            />
          ))}
        </Flex>
        <Flex vertical gap={"2rem"}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
            size="large"
          >
            <Form.Item
              name="name"
              label={i18n("portfolio.page.contact.name.input")}
              rules={[
                {
                  required: true,
                  message: i18n("portfolio.page.contact.name.validation"),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label={i18n("portfolio.page.contact.email")}
              rules={[
                {
                  type: 'email',
                  message: i18n("portfolio.page.contact.email.notvalid"),
                },
                {
                  required: true,
                  message: i18n("portfolio.page.contact.email.validation"),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label={i18n("portfolio.page.contact.subject")}
              rules={[
                {
                  required: true,
                  message: i18n("portfolio.page.contact.subject.validation"),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label={i18n("portfolio.page.contact.message")}
              rules={[
                {
                  required: true,
                  message: i18n("portfolio.page.contact.object.validation"),
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  )
}