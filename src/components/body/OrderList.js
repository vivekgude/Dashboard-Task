import { OrderListData } from './OrderListData'
import { Box, Typography, Paper } from '@mui/material';
import { TableCell, TableRow, TableContainer, TableHead, TableBody, Table } from '@mui/material';
export default function OrderList() {
    return (
        <Box sx={{display:'flex-row'}}>
            <Typography variant='h5' sx={{ marginBottom: "10px", fontSize: "18px", fontWeight: 'bold' }}> OrderList </Typography>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PRODUCT</TableCell>
                            <TableCell >ORDER DATE</TableCell>
                            <TableCell >STATUS</TableCell>
                            <TableCell >CUSTOMER</TableCell>
                            <TableCell >PRICE PER UNIT</TableCell>
                            <TableCell >QUANTITY</TableCell>
                            <TableCell >TOTAL PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {OrderListData.map((row) => (
                            <TableRow key={row.product.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>
                                    <Box sx={{ display: "flex" }}>
                                        <img src={row.image} alt="prodimg" style={{ height: "35px", width: "35px", borderRadius: "5px", objectFit: "cover", marginRight: "5px" }} />
                                        <Box>
                                            <Typography>{row.product.id}</Typography>
                                            <Typography>{row.product.name}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell >
                                    <Box>
                                        <Typography>{row.orderdate.time}</Typography>
                                        <Typography>{row.orderdate.date}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell><Typography>{row.status}</Typography></TableCell>
                                <TableCell >
                                    <Box>
                                        <Typography>{row.customer.name}</Typography>
                                        <Typography>{row.customer.location}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell><Typography>{row.priceperunit}</Typography></TableCell>
                                <TableCell><Typography>{row.quantity}</Typography></TableCell>
                                <TableCell><Typography>{row.totalprice}</Typography></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}