import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles';


// import JosefinSans from './assets/JosefinSans-VariableFont_wght.ttf'

const theme = createTheme({
  typography: {
    "fontFamily": "JosefinSans"
  },
  palette: {
    primary: {
      main: '#065535',
    },
  }
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
