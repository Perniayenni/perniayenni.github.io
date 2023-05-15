import { I18nextProvider } from 'react-i18next'
import { AppRouter } from './routers/AppRouter'
import i18next from './localization/i18n'

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <AppRouter />
    </I18nextProvider>
  )
}

export default App;
