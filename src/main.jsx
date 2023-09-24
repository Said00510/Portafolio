import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/theme/light.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import i18next from 'i18next'
import { I18nextProvider} from 'react-i18next'

import global_es from '../src/assets/translations/es/global.json'
import global_en from '../src/assets/translations/en/global.json'

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources:{
        es:{
            global: global_es
        },

        en:{
            global: global_en
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
)