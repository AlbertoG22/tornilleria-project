import { LockOutlined } from '@mui/icons-material';
import { Avatar, Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{
          width: { xs: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}
      >
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>
        </Grid>

        { children }

      </Grid>
    </Grid>
  );
};
