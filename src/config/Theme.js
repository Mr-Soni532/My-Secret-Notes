import { createTheme } from "@material-ui/core";

let theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#ffffff"
        },
        secondary: {
            main:'#ff5ef7'
        }
    },
        typography: {
            fontFamily: 'Poppins',
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700
        }
})

export default theme;