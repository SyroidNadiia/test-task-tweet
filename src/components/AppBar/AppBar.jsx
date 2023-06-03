import { AppBar as MuiAppBar, Container, Toolbar, Box } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
   return (
    <MuiAppBar position="fixed">
      <Container>
        <Toolbar>
          <Navigation />
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
