import MuiLink  from '@material-ui/core/Link';
import MuiBox  from '@material-ui/core/Box';
import MuiFormControl  from '@material-ui/core/FormControl';
import MuiFormLabel from '@material-ui/core/FormLabel';
import MuiButton from '@material-ui/core/Button';
import MuiCheckbox from '@material-ui/core/Checkbox';
import VisibilityIcon from '../components/visibleEye'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import MuiTextField  from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import typography from '../theme/typography';
import palette from '../theme/palette';

const Box = withStyles((theme) =>({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: "-50%",
        transform: 'translate(-50%, -50%)',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        backgroundColor: theme.palette.white
    }
}))(MuiBox);
const TextField = withStyles((theme) =>({
    root: {
        maxWidth: '500px',
        overflow: 'hidden',
        borderRadius: 15,
        marginBottom: 20,
        border: '1px solid transparent',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: '#fff',
            '& div::before': {
                border: 'none',
            },
        },
        '& .MuiFilledInput-root':{
            border: '1px solid transparent',
        },
        '&$focus': {
          backgroundColor: '#000',
          border: `1px solid ${palette.basic.lihtBlue}` 
        },
        '& label.Mui-focused': {
            color: palette.input.icon,
        },
        '& div.Mui-focused': {
            border: `1px solid ${palette.basic.lihtBlue}`,
            borderRadius: 15,
            backgroundColor: '#fff',
        },
        '& div::before': {
            border: 'none',
        },
        
        '& .MuiFilledInput-underline:after': {
            border: 'none',
        },
    },
}))(MuiTextField);

const FormControl = withStyles((theme) =>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
    }
}))(MuiFormControl);

const FormControlLabel = withStyles((theme) =>({
    root: {
        marginBottom: '22px',
    },
    label: {
        ...typography.checkBoxLabelText
    },
}))(MuiFormControlLabel);

const Checkbox = withStyles((theme) =>({
    root: {
        width: '18px',
        height: '18px',
        marginRight: '11px',
        marginLeft: '11px',
        color: palette.input.icon,
        transition: 'all 0.2s ease'
    },
    checked:{
        backgroundColor: palette.white,
        color: palette.basic.lihtBlue
    }
}))(MuiCheckbox);

const FormLabel = withStyles((theme) =>({
    root: {
        ...typography.h5,
        marginBottom: '20px',
    }
}))(MuiFormLabel);

const Button = withStyles((theme) =>({
    root: {
        maxWidth: '500px',
        ...theme.typography.buttonText,
        color: palette.white,
        letterSpacing: '0.46px',
        padding: '8px 22px',
        backgroundColor: palette.basic.lihtBlue,
        borderRadius: '35px',
        '&:hover': {
            backgroundColor: palette.basic.darkBlue,
        }
    },
}))(MuiButton);

const Link = withStyles((theme) =>({
    root: {
        textAlign: 'right',
        ...typography.buttonLinkText,
        letterSpacing: '0.46px',
        textTransform: 'uppercase',
        marginBottom: '14px',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover':{
            textDecoration: 'none'
        }
    }
}))(MuiLink);

const useStyles = makeStyles((theme) => ({
    lastChild: {
        marginBottom: '12px',
        borderRadius: 15,
        fill: palette.input.icon,
        border: 'none'
    },
}));
function RedditTextField(props) {
  
    return <TextField InputProps={{  disableUnderline: true }} {...props} />;
  }
const FormLogin = ({ handleClick}) =>{
    const classes = useStyles();
    return (
        <Box >
            <Link onClick={handleClick} className={classes.typography}>
                Register
            </Link>
            <FormControl>
                <FormLabel>Login</FormLabel>
                
                <RedditTextField
                    label="Email"
                    variant="filled"
                    id="reddit-input"
                    type='text'
                />
                
                <RedditTextField
                    label="Password"
                    variant="filled"
                    id="reddit-input"
                    type='password'
                    className={classes.lastChild}
                    InputProps={{
                        endAdornment: (
                          <VisibilityIcon position="start" />
                        ),
                      }}
                />
                <FormControlLabel
                    control={
                    <Checkbox 
                    color = {palette.input.icon}
                    value = 'I agree with the'/>
                    }
                    label='Remember me'
                /><Button>login</Button>
                
            </FormControl>
        </Box>
    )
}


export default FormLogin;