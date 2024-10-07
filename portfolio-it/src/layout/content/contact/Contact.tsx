import { CheckOutlined, CloseOutlined, ContactsOutlined, PhoneOutlined } from '@ant-design/icons'
import emailjs from '@emailjs/browser'
import { Button, Flex, Form, Input } from 'antd'
import { FC } from 'react'
import { FaRegMap } from "react-icons/fa6"
import { useDispatch } from 'react-redux'
import { CategoryName } from '../../../component/categoryname/CategoryName'
import { ContactCard } from '../../../component/contactcard/ContactCard'
import { useLanguage } from '../../../hook/useLanguages'
import { showNotification } from '../../../redux/slice/notificationSlice'
import "./Contact.scss"

export const Contact: FC = () => {
  const { i18n } = useLanguage();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

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

  const onFinish = () => {
    const formElement = document.getElementById('contact-form') as HTMLFormElement;

    if (formElement) {
      emailjs
        .sendForm(
          'service_h706brt',
          'template_f2q9i5j',
          formElement,
          'bkQzHOiUXlXROLIkI'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            dispatch(showNotification({
              message: i18n("portfolio.page.contact.submit.send.successful"),
              description: i18n("portfolio.page.contact.submit.send.desc"),
              icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
            }));
          },
        ).catch((error) => {
          console.error('FAILED...', error.text);
          dispatch(showNotification({
            message: i18n("portfolio.page.contact.submit.send.failed"),
            description: i18n("portfolio.page.contact.submit.send.desc"),
            icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
          }));
        }).finally()
    } else {
      console.error('Form element not found!');
    }
  };

  return (
    <Flex vertical gap={"1rem"} className="contact">
      <CategoryName
        name="portfolio.page.contact"
        desc="portfolio.page.contact.name"
      />

      <Flex vertical={false} gap={"2rem"} align="center" wrap className="contact-card">
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
            id="contact-form"
            form={form}
            name="register"
            onFinish={onFinish}
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
              <Button type="primary" htmlType="submit" onClick={onFinish}>
                {i18n("portfolio.page.contact.submit.form")}
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  )
}