import { Box, Typography, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie } from "recharts";
import { chartdata1, chartdata2 } from './Chartdata'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Chart() {
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Box sx={{ border: '0.5px solid', borderRadius: "5px", padding: "10px 15px" }}>
                    <Box sx={{ marginBottom: '5px', padding: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant='h5' sx={{ fontSize: "18px", fontWeight: 'bold' }}> Sales Analytics </Typography>
                        <FormControl sx={{ fontSize: "15px", width: "180px" }}>
                            <InputLabel id="demo-simple-select-label">Period</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="time"
                            >
                                <MenuItem value={7} >Period: <Typography variant='body1' component='span' sx={{ fontWeight: "bold" }}> This Week</Typography></MenuItem>
                                <MenuItem value={28}>Period: <Typography variant='body1' component='span' sx={{ fontWeight: "bold" }}> This Month</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <LineChart width={750} height={300} data={chartdata1}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" unit="K" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box sx={{ border: '0.5px solid', borderRadius: "5px", padding: "10px 15px" }}>
                    <Box sx={{ padding: "5px", display: "flex", justifyContent: "space-between"}}>
                        <Typography variant='h5' sx={{ fontSize: "18px", fontWeight: 'bold' }}> Social Source </Typography>
                        <MoreHorizIcon />
                    </Box>
                    {/* <ResponsiveContainer  width={370} height={400} > */}
                        <PieChart width={370} height={190}>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={chartdata2}
                                cx="50%"
                                cy={190}
                                outerRadius={160}
                                innerRadius={80}
                                fill="#8884d8"
                                label
                            />
                        </PieChart>
                    {/* </ResponsiveContainer > */}
                     <Box marginBottom={1}>
                            <Typography variant='h6' sx={{  fontSize: "12px" }}> TOTAL SALES </Typography>
                            <Typography variant='h5' sx={{  fontSize: "25px", fontWeight: 'bold' }}> 3,234 </Typography>
                            <Typography variant='h5' sx={{  fontSize: "12px", fontWeight: 'bold' }}> Products </Typography>
                    </Box> 
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Box sx={{ borderTop: "5px solid #8884d8", padding: "10px" }} >
                            <Typography variant='h6' sx={{ fontSize: "15px" }}> E-Commerce </Typography>
                            <Typography variant='h5' sx={{ fontSize: "20px", fontWeight: 'bold' }}> 1,618 </Typography>
                        </Box>
                        <Box sx={{ borderTop: "5px solid #8884d8", padding: "10px" }} >
                            <Typography variant='h6' sx={{ fontSize: "15px" }}> Facebook </Typography>
                            <Typography variant='h5' sx={{ fontSize: "20px", fontWeight: 'bold' }}> 808 </Typography>
                        </Box>
                        <Box sx={{ borderTop: "5px solid #8884d8", padding: "10px" }} >
                            <Typography variant='h6' sx={{ fontSize: "15px" }}> Instagram </Typography>
                            <Typography variant='h5' sx={{ fontSize: "20px", fontWeight: 'bold' }}> 808 </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}