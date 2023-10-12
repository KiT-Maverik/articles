import Box from '@mui/material/Box';
import {Stack} from "@mui/system";
import Head from 'next/head';

import {ProductCard} from "@components/product-card/product-card";
import {style} from '@styles/root.style';
import {container, containerPosition} from "@styles/utility.styles";

export default function Home() {

    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="description" content="Articles fancy page"/>
            </Head>

            <Box component='main' sx={style.main}>
                <Stack gap={10} my={10} sx={[container, containerPosition]}>
                    <ProductCard/>
                </Stack>
            </Box>
        </>
    )
}
