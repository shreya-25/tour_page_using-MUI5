import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 10,
            },
          },
        ],
      },
    },
  });

const TourCard = ({tour}) =>
{
    return <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}>
            <img src={tour.image} className="img" alt=""/>
            <Box paddingX ={1}>
            <Typography variant="subtitle2" component="h6">
                {tour.name}
            </Typography>
            <Box sx={{
                display:"flex",
                alignItems:"center"
            }}><AccessTime sx={{ width:14 }}></AccessTime>
              <Typography variant="body2" component="p" marginLeft={0.5}> {tour.duration} Hours</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                alignItems:"center"
            }} marginTop= {3}> <Rating name="read-only" value={tour.rating} precision={0.5} readOnly size="small" />
           <Typography variant="body2" component="p" marginLeft={0.5}>{tour.rating} </Typography>
           <Typography variant="body2" component="p" marginLeft={4.5}> ({tour.numberOfReviews} reviews)</Typography>
            </Box>
            <Box>
            <Typography variant="h6" component="h3" marginTop={0.5}> From ${tour.price}</Typography>  
            </Box>
            </Box>
        </Paper>
        </ThemeProvider>
    </Grid>
};
export default TourCard;