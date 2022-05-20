import './App.css';
import Navbar from './components/Navbar';
import {ThemeProvider,createTheme} from '@mui/material'

function App() {
  const theme = createTheme({
    light:{
      color1:"#383874",
      color2:"#8676ff",
      color3:"#ffffff",
      color4:"#d7e4ee"
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar></Navbar>
    </div>
    </ThemeProvider>
  );
}

export default App;
