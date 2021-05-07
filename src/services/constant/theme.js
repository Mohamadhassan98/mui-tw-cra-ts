// @ts-ignore
const {createMuiTheme} = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d8bc73",
      light: "#f9f4e8",
    },
    background: {
      default: "#fafafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#717171",
      disabled: "#8e8e8e",
      hint: "#1fa268",
    },
    secondary: {
      main: "#881c33",
    },
    error: {
      main: "#ff2727",
    },
    grey: {
      50: "#8e8e8e",
      100: "#bec4d2",
      200: "#f6f6f6",
      300: "#f9f9f9",
      800: "#dddddd",
    },
  },
  typography: {
    fontFamily: "Vazir",
    fontWeightMedium: 500,
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
  },
  props: {
    MuiGrid: {
      wrap: "nowrap",
    },
  },
  direction: "rtl",
  overrides: {
    MuiButton: {
      root: {
        "&.animated": {
          "& .MuiButton-label": {
            zIndex: 110,
            position: "relative",
          },
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
          },
          "&:after": {
            content: '""',
            display: "inline-block",
            height: "100%",
            width: "100%",
            borderRadius: "inherit",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 100,
            transition: "all .6s",
            background: "inherit",
            opacity: "1 !important",
          },
          "&:hover:after": {
            transform: "scaleX(1.4) scaleY(1.6)",
            opacity: "0 !important",
          },
          "&:focus": {
            transform: "translateY(-1px)",
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

module.exports = {theme};
