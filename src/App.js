import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/Appbar";
import EmployeeDetails from "./components/admin-console/EmployeeDetails";
import NoPage from "./pages/NoPage";
import CompanyProfile from "./components/admin-console/CompanyProfile";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  // typography: {
  //   fontFamily: [
  //     "-apple-system",
  //     "BlinkMacSystemFont",
  //     '"Segoe UI"',
  //     "Roboto",
  //     '"Helvetica Neue"',
  //     "Arial",
  //     "sans-serif",
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(","),
  // },
  status: {
    danger: orange[500],
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          // ...(mode === "dark" && {
          //   backgroundColor: "#232121",
          // }),
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#42555a",
      main: "#0f2227",
      dark: "#132a31",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#f2f2f2",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<EmployeeDetails />} />
              <Route
                path="/companyprofile"
                element={<CompanyProfile />}
              ></Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
