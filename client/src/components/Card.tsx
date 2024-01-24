

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className='"min-w-250px"'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          fitness
        </Typography>
        <Typography variant="h5" component="div">
          tr{bull}k{bull}o{bull}e
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          fitness
        </Typography>
        <Typography variant="body2">
          work hard .
          <br />
          {'"eat sleep code"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
