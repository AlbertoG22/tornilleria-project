import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#34495E'
        },
        card: {
            main: '#F9F9F9'
        },
        error: {
            main: red.A400
        }
    }
});