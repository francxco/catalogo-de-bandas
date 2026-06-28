import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'rockTheme',
    themes: {
      rockTheme: {
        dark: false,
        colors: {
          primary: '#ffffff',  
          secondary: '#D32F2F',   
          accent: '#FF9800',     
          success: '#2E7D32',    
          error: '#C62828',      
          info: '#1565C0',       
          background: '#000000',  
          surface: '#000000',    
        },
      },
    },
  },
})