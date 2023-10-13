import {Stack} from "@mui/system";

import {style} from "./header.style";
import {route} from "@constants/page-routes.constants";
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import Image from "next/image";

export const Header = () => {
    const {push} = useRouter();

    return (
        <Stack component='header'
               sx={style.container}
               direction='row'
               justifyContent='space-between'
               alignItems='center'>
            <Stack sx={{flexGrow: 1, cursor: 'pointer'}} direction='row' alignItems='center'>
                <Image src='/img/logo.png' alt="logo" width={75} height={42} onClick={() => push(route.home)}/>
            </Stack>
            <Button onClick={() => push(route.placeholder)}>About us</Button>
            <Button onClick={() => push(route.placeholder)}>What we do</Button>
            <Button onClick={() => push(route.placeholder)}>Our stuff</Button>
            <Button onClick={() => push(route.placeholder)}>Contact us</Button>
        </Stack>
    )
}
