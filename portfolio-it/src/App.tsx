import { Flex } from 'antd'
import './App.scss'
import { Layout } from './layout/Layout'
import { Language } from './layout/content/language/Language'

function App() {
  return (
    <div className="app">
      <Language />
      <Layout />
    </div>
  )
}

export default App
