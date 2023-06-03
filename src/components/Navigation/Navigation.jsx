import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const Navigation = () => {

  return (
    <nav>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button component={NavLink} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Button
          component={NavLink}
          to="/tweets"
          variant="contained"
          color="primary"
        >
          Tweets
        </Button>
      </Box>
    </nav>
  );
};
