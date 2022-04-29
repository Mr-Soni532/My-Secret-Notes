import { makeStyles } from '@material-ui/core'
import { blue, cyan, green, pink, purple, red, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        fontSize: "20px",
        '&:hover': {
            color: '#1cc3b2',
            transition: theme.transitions.duration.short
        }
    },
    signup_link: {

        color: '#ffffff',
        fontSize: "16px",
        fontWeight: 300,
        '&:hover': {
            color: 'cyan',
            transition: theme.transitions.duration.short
        },
    },
    icon: {
        color: '#1cc3b2'
    },

    clock: {
        color: '#ffffff',
        fontSize: '25px',
        fontWeight: 400
    },

    login_btn: {
        margin: ' 25px 0px',
        letterSpacing: '1.3px',
        fontSize: '18px',
        color: theme.palette.primary.main,
        // backgroundImage:' linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )',
        backgroundColor: ' #000000',
        backgroundImage: 'linear-gradient(135deg, #000000 0%, #158abf 43%, #0a5671 97%)',
        transitionDuration: '800ms',
        '&:hover': {
            background: '#ffffff',
            color: '#000000'
        }
    },
    AddNoteBtn: {
        margin: ' 18px 0px',
        letterSpacing: '1.3px',
        fontSize: '18px',
        color: theme.palette.primary.light,
        background: theme.palette.primary.dark,

        // backgroundImage:' linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )',


        '&:hover': {
            background: theme.palette.primary.light,
            color: theme.palette.primary.dark
        }
    },

    errorMessage: {
        color: '#FF0000',
        fontWeight: 500
    },
    TextField: {
        width: '100%',
        marginTop: '8px 0 4px',
        color: 'red'
    },
    input: {
        color: 'white',
        fontWeight: 300,
        letterSpacing: '1px'
    },
    //! Pending
    avatar: {
        backgroundColor: (note) => {
            switch (note.tag) {
                case "ToDo": return red[900]
                case "Work": return blue[800]
                case "Love": return pink[600]
                case "Money": return green[800]
                case "Personal": return cyan[600]
                case "Shopping": return purple[800]
                case "Reminder": return yellow[700]
                default: break;
            }
        }
    },
    notes: {
        position: 'relative',
        width: '100%',
        height: '100%',
        // overflowY: 'scroll',
        backgroundImage: '  radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )',
        padding: 0,
    },
    createNoteButton: {
        position: 'fixed',
        right: '40px',
        bottom: '50px',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#000000',
        color: "#ffffff",
        fontSize: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transitionDuration: '300ms',
        '&:hover': {
            color: '#424242',
            background: '#38b6ff',
            transform: 'scale(1.1)'
        }
    },

    noteLayout: {
        position: 'relative',
        top: '50px'
    },
    alert: {
        width: '100%',
        position: 'fixed',
        zIndex: 101
    },

}))

export default useStyles