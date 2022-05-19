import { Box } from "@mui/system"
import UserInfo from "./UserInfo"
import Chart from "./Chart"
import OrderList from "./OrderList"
export default function Body(){
    return(
        <Box>
            <UserInfo></UserInfo>
            <Chart></Chart>
            <OrderList></OrderList>
        </Box>
    )
}