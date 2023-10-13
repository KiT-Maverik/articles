import type {AppProps} from 'next/app'

import {CssBaseline, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";

import {Footer} from "@components/layout/footer/footer";
import {Header} from "@components/layout/header/header";

import {style} from "@styles/root.style";
import {theme} from "@styles/theme.styles";
import {ToastProvider} from "@components/toast-provider/toast-provider";

export default function App({Component, pageProps}: AppProps) {

    return (
        <>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <ToastProvider>
                    <Box sx={style.app}>
                        <Header/>
                        <Box component='main' sx={style.main}>
                            <Component {...pageProps} />
                        </Box>
                        <Footer/>
                    </Box>
                </ToastProvider>
            </ThemeProvider>
        </>
    )
}
