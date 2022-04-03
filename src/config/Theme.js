import { createTheme } from "@material-ui/core";


let theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#424242"
        },
        secondary: {
            main:'#424242',
            light: "#ff0000",
            dark: "#ffffff",
            contrastText: '#000000'
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