import { IconButton } from '@mui/material'; 
import { AddOutlined } from '@mui/icons-material';

export const IconBtn = ({ handleOpenModal }) => {
  return (
    <>
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'primary.main',
          ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={ handleOpenModal }
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </>
  );
};
