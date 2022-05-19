import { Box,Grid,Button,Typography, Divider} from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function UserInfo() {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, marginTop: "20px" }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' } }} >
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}> Hi, Albert Tristian </Typography>
                    <Typography variant='h6' sx={{ fontSize: "15px" }}> welcome back to analyze</Typography>
                </Box>
                <Box sx={{ display: "flex", height: '40px' }}>
                    <Button variant='outlined' sx={{ fontSize: "13px", fontWeight: "bold", padding: "20px", marginRight: "10px" }} endIcon={<ShareOutlinedIcon />} >Share</Button>
                    <Button variant='contained' sx={{ fontSize: "13px", fontWeight: "bold", padding: "20px" }} endIcon={<FileDownloadOutlinedIcon />} >Export</Button>
                </Box>
            </Box>
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                <Grid container spacing={5}>
                    <Grid item md={4}>
                        <Box sx={{ border: "0.5px solid", borderRadius: "5px" }}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Box >
                                    <Typography variant='h6'> TOTAL INCOME </Typography>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}> $589,209.78 </Typography>
                                    <Typography sx={{ fontSize: "15px" }}> <Typography variant="h6" component="span">20% </Typography> increase comapred to last week </Typography>
                                </Box>
                                <div style={{ padding: "20px" }}>
                                    <CallMadeIcon />
                                </div>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Typography variant='h6'> See Detail </Typography>
                                <KeyboardDoubleArrowRightIcon />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} >
                        <Box sx={{ border: `0.5px solid`, borderRadius: "5px" }}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Box>
                                    <Typography variant='h6'> TOTAL EXPENSE </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}> $120,458.90 </Typography>
                                    <Typography variant='h6' sx={{ fontSize: "15px" }}> <Typography variant="h6" component="span">15%</Typography> decrease comapred to last week </Typography>
                                </Box>
                                <div style={{ padding: "20px" }}>
                                    <SouthEastIcon />
                                </div>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Typography variant='h6'> See Detail </Typography>
                                <KeyboardDoubleArrowRightIcon />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item md={4} >
                        <Box sx={{ border: `0.5px solid`, borderRadius: "5px" }}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Box>
                                    <Typography variant='h6'> TOTAL VISITORS </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}> 502,903 </Typography>
                                    <Typography variant='h6' sx={{ fontSize: "15px" }}> <Typography variant="h6" component="span">80%</Typography> increase comapred to last week </Typography>
                                </Box>
                                <div style={{ padding: "20px" }}>
                                    <CallMadeIcon />
                                </div>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                                <Typography variant='h6'> See Detail </Typography>
                                <KeyboardDoubleArrowRightIcon />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}