import {blueGrey} from "@mui/material/colors";
import {type SxProps, type Theme} from "@mui/system";

import {theme} from "@styles/theme.styles";
import {container as containerLayout} from "@styles/utility.styles";

const area = {
    about: 'about',
    customerCare: 'customerCare',
    logo: 'logo',
    socials: 'socials',
} as const;

const background: SxProps = {
    backgroundColor: blueGrey[900],
} as const;

const container: SxProps<Theme> = {
    ...containerLayout,

    display: 'grid',
    gap: 4,
    my: 10,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
    '${area.about} ${area.customerCare}'
    '${area.logo} ${area.logo}'
    '${area.socials} ${area.socials}'`,

    ul:  {
        margin: 0,
        padding: 0,
    },

    'ul li' : {
        listStyle: 'none',        
    },

    a: {
        textDecoration: 'none',
        color: theme => theme.palette.common.white,        
    },    

    h5: {
        color: theme => theme.palette.common.white,
        textAlign: 'center',
    },

    button: {
        color: theme => theme.palette.common.white,
    },

    [theme.breakpoints.up('desktop')]: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateAreas: `
            '${area.logo} ${area.about} ${area.customerCare} ${area.socials}'`,
    }
} as const;

const about: SxProps = {
    gridArea: area.about,
} as const;

const customerCare: SxProps = {
    gridArea: area.customerCare,
} as const;

const logo: SxProps<Theme> = {
    gridArea: area.logo,
    display: "flex",
    justifyContent: 'center',
    maxWidth: '272px',

    img: {
        maxWidth: '100%',
        height: 'auto',
    }
} as const;

const socials: SxProps = {
    gridArea: area.socials,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    gap: 2,
} as const;

export const style = {
    background,
    container,
    about,
    customerCare,
    logo,
    socials,
}
