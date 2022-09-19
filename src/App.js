import './App.css';
import Header from './components/Header'
import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles';
// import JosefinSans from './assets/JosefinSans-VariableFont_wght.ttf'

const theme = createTheme({
  typography: {
    "fontFamily": "JosefinSans"
  }
})
 
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
