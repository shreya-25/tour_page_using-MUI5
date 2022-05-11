import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion'
import Paper from '@mui/material/Paper';
import BasicModal from '../components/Modal';
import BottomNavigation from '@mui/material/BottomNavigation';

const Tour=()=> <Container sx={{width: 900}}>
<Typography variant="h3" component="h1" marginTop={3}>
    Explore the World in Vegas
</Typography>
<Box marginTop={3} sx={{display:'flex'}}> 
<img src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" height={400} width={500}/>
<ImageCollage />
</Box> 
<Box>
<Typography variant="h6" component="h4" marginTop={3}>
    About this Tour
</Typography> 
<Typography variant="paragraph" component="p" marginTop={3}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets

</Typography>  
</Box>

<Box marginBottom={10}>
<Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
    Frequently Asked Questions
</Typography> 
<CustomizedAccordions/>
</Box>
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
</Container>
export default Tour;

// https://thumbs.dreamstime.com/z/las-vegas-welcome-sign-nevada-usa-to-dusk-149286875.jpg