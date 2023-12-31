import {type SxProps} from "@mui/system";
import {theme} from "@styles/theme.styles";

const articles: SxProps = {
    display: "grid",
    gridTemplateColumns: '1fr',
    m: '0 auto',
    gap: 5,

    [theme.breakpoints.up('tablet')]: {
        gridTemplateColumns: '6fr 6fr',
    },

    [theme.breakpoints.up('laptop')]: {
        gridTemplateColumns: '4fr 4fr 4fr',
    },

    [theme.breakpoints.up('desktop')]: {
        gridTemplateColumns: '3fr 3fr 3fr 3fr',
    },
} as const;

const findMoreContainer = {
    backgroundColor: 'white',
    py: 10,
    alignSelf: 'stretch'
}

const link = {
    'a': {
        textDecoration: 'none'
    }
}

export const style = {
    articles,
    findOutMore: {
        container: findMoreContainer,
        link,
    }
}
