import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import AppRouter from './routes/AppRoutes'; // Path check kar lein

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;