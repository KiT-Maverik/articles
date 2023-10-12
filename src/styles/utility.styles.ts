import {type SystemCssProperties, type Theme} from "@mui/system";

import {theme} from "@styles/theme.styles";

export const hidden: SystemCssProperties = {
    display: "none",
} as const;

export const centered: SystemCssProperties = {
    m: '0 auto',
} as const;

export const centered2D: SystemCssProperties = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
} as const;

export const containerPosition: SystemCssProperties = {
    my: 10,
} as const;

/**
 * Utility style intended to provide unified layout settings
 * for all content containers within the application.
 */
export const container: SystemCssProperties<Theme> = {

    width: "100%",
    maxWidth: theme => theme.breakpoints.values.desktop,

    px: 3,
    m: "0 auto",

    [theme.breakpoints.up('tablet')]: {
        px: 5,
    },

    [theme.breakpoints.up('laptop')]: {
        px: 6,
    },

    [theme.breakpoints.up('desktop')]: {
        px: 8,
    },
} as const;
