import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import AppBar from "./components/Appbar";
import Card from "./components/Card";
import Paper from "@mui/material/Paper";
import { useState } from "react";

function App() {
  const[darkMode,setDarkMode]=useState(true);
  const AppTheme = createTheme({
    palette: {
     mode:darkMode? "dark":"light"
    },
  });

  return (
    <>
      
      <ThemeProvider theme={AppTheme}>
      <AppBar cheak={darkMode}  change={()=>setDarkMode(!darkMode)}/>
        <Paper className="h-250vh">
          <div>fitness tracker</div>
          <Card />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
