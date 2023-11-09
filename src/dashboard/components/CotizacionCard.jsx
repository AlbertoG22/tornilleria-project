import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

export const CotizacionCard = () => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            08-Nov-2023
          </Typography>
          <Typography variant="h5" component="div">
            Pancho López
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography> */}
          <br />
          <Typography variant="body2">05 tornillo °8 NC 5/8 x 3</Typography>
          <Typography variant="body2">15 tornillo °8 NC 1/2 x 2 1/2</Typography>
          <Typography variant="body2">48 tornillo galv. 3/4 x 8 1/2</Typography>
          <br />
          <Typography variant="body2">Total $560.00</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
