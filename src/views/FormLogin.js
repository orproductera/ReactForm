import React from 'react';
import MuiLink  from '@material-ui/core/Link';
import MuiBox  from '@material-ui/core/Box';
import MuiFormControl  from '@material-ui/core/FormControl';
import MuiFormLabel from '@material-ui/core/FormLabel';
import MuiButton from '@material-ui/core/Button';
import MuiCheckbox from '@material-ui/core/Checkbox';
import VisibilityIcon from '../components/visibleEye'
import HiddenIcon from '../components/hiddenEye'
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
        '& .MuiInputBase-root': {
            cursor: 'pointer',
        }
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
    },
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
        marginLeft: 'auto',
        marginRight: 0,
        textAlign: 'right',
        ...typography.buttonLinkText,
        letterSpacing: '0.46px',
        textTransform: 'uppercase',
        marginBottom: '14px',
        textDecoration: 'none',
        padding: '4px 29px',
        width: 129,
        border: '1px solid' + palette.input.bg,
        borderRadius: 15,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover':{
            textDecoration: 'none',
            borderColor: palette.basic.lihtBlue
        },
        '&:active':{
            color: palette.basic.darkBlue
        }
    }
}))(MuiLink);

const useStyles = makeStyles((theme) => ({
    lastChild: {
        marginBottom: '12px',
        borderRadius: 15,
        fill: palette.input.icon,
        border: 'none',
        "&svg":{
            cursor: 'pointer'
        }
    },
    borderForm: {
        border: '1px solid' + palette.input.bg,
        borderRadius: 15,
    }
}));
function RedditTextField(props) {
  
    return <TextField InputProps={{  disableUnderline: true }} {...props} />;
  }
const FormLogin = ({ handleClick }) =>{
    const classes = useStyles();
    const [see, setSee] = React.useState(true);

    const switchEyeClick = () => {
        setSee(!see);
        const password = document.getElementById('reddit-password')
        !see ? password.type = 'password' : password.type = 'text'
      };

    return (
        <Box >
        <Link  onClick={handleClick} className={classes.typography}>
            Register
        </Link>
        <form className={classes.borderForm}>
            <FormControl>
                <FormLabel focused={false}>Login</FormLabel>
                
                <RedditTextField
                    label="Email"
                    variant="filled"
                    id="reddit-email"
                    type='email'
                />
                
                <RedditTextField
                    label="Password"
                    variant="filled"
                    id="reddit-password"
                    type='password'
                    className={classes.lastChild}
                    InputProps={{
                        endAdornment: (
                            see ? 
                          <VisibilityIcon 
                            position="start"
                            click={switchEyeClick} />
                          : 
                          <HiddenIcon 
                            position="start"
                            click={switchEyeClick} />
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
        </form>
        </Box>
    )
}


export default FormLogin;