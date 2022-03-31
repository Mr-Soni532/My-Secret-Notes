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
    }

}))

export default useStyles