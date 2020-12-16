import React from 'react'
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Button = withStyles((theme) =>({
    root: {
        padding: 0,
        margin: 0,
        minWidth: 0,
        width: 22,
        height: 15
    },
    startIcon: {
        margin: 0
    }
}))(MuiButton);

const hiddenEye = ({click}) =>{
    return (
        <Button 
            onClick={click}
            startIcon ={
            <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4.5C13.76 4.5 16 6.74 16 9.5C16 10.01 15.9 10.5 15.76 10.96L18.82 14.02C20.21 12.79 21.31 11.25 22 9.49C20.27 5.11 16 2 11 2C9.73 2 8.51 2.2 7.36 2.57L9.53 4.74C10 4.6 10.49 4.5 11 4.5ZM1.71 1.16C1.32 1.55 1.32 2.18 1.71 2.57L3.68 4.54C2.06 5.83 0.77 7.53 0 9.5C1.73 13.89 6 17 11 17C12.52 17 13.97 16.7 15.31 16.18L18.03 18.9C18.42 19.29 19.05 19.29 19.44 18.9C19.83 18.51 19.83 17.88 19.44 17.49L3.13 1.16C2.74 0.77 2.1 0.77 1.71 1.16ZM11 14.5C8.24 14.5 6 12.26 6 9.5C6 8.73 6.18 8 6.49 7.36L8.06 8.93C8.03 9.11 8 9.3 8 9.5C8 11.16 9.34 12.5 11 12.5C11.2 12.5 11.38 12.47 11.57 12.43L13.14 14C12.49 14.32 11.77 14.5 11 14.5ZM13.97 9.17C13.82 7.77 12.72 6.68 11.33 6.53L13.97 9.17Z"/>
            </svg>
            }
        />
    )
}

export default hiddenEye;