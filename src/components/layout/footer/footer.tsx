import Box from "@mui/material/Box";

import {style} from "./footer.style";
import {Button, Divider} from "@mui/material";
import {route} from "@constants/page-routes.constants";
import {useRouter} from "next/router";
import {Stack} from "@mui/system";

export const Footer = () => {
    const {push} = useRouter();

    return (
        <Box component='footer' sx={style.background}>
            <Stack
                direction='row'
                justifyContent='center'
                sx={style.container}
                divider={<Divider orientation="vertical" flexItem sx={{borderColor: 'white'}}/>}
            >
                <Button onClick={() => push(route.placeholder)} sx={style.link}>Terms and conditions</Button>
                <Button onClick={() => push(route.placeholder)} sx={style.link}>Privacy policy</Button>
            </Stack>
        </Box>
    );
}
