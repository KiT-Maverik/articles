import {blueGrey} from "@mui/material/colors";
import {type SxProps} from "@mui/system";

const background: SxProps = {
    backgroundColor: blueGrey[900],
} as const;

const container: SxProps = {
    py: 10,
} as const;

const divider: SxProps = {
    borderColor: 'white'
} as const;

const link: SxProps = {
    textTransform: 'capitalize',
    color: 'white',
} as const;

export const style = {
    background,
    container,
    divider,
    link,
}
