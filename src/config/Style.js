import { makeStyles } from '@material-ui/core'

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
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      color:  theme.palette.text.secondary,
      fontSize: '30px',
      
    },
    login_btn: {
        margin: ' 25px 0px',
        letterSpacing: '1.3px',
        fontSize: '18px',
        color: theme.palette.primary.main,
        // backgroundImage:' linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )',
        backgroundColor:' #000000',
        backgroundImage: 'linear-gradient(135deg, #000000 0%, #158abf 43%, #0a5671 97%)',
       transitionDuration: '800ms',
        '&:hover' : {
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
        
       
        '&:hover' : {
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
    Avatar: {
        // backgroundColor: ({props})
    },
    notes: {
        backgroundImage:'  radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% )'
    }
    

}))

export default useStyles