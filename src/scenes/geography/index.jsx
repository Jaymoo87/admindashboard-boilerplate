import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';

import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geo Chart" subtitle="Sample Geo Chart" />
      <Box height="75vh" border={`1px solid ${colors.greenAccent[200]}`} borderRadius={'10px'}>
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
