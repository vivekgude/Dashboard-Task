import { Box } from "@mui/system"
import UserInfo from "./UserInfo"
import Chart from "./Chart"
export default function Body(){
    return(
        <Box>
            <UserInfo></UserInfo>
            <Chart></Chart>
        </Box>
    )
}