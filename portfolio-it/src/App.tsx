import './App.scss'
import { Layout } from './layout/Layout'
import { DownloadCVButton } from './layout/content/downloadcv/DownCVButton'
import { Language } from './layout/content/language/Language'

function App() {
  return (
    <div className="app">
      <div className='header'>
        <DownloadCVButton />
        <Language />
      </div>
      <Layout />
    </div>
  )
}

export default App
