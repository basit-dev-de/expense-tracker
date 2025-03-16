
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "next-themes"
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App.tsx'
import './i18n/i18n'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </Provider>
);
