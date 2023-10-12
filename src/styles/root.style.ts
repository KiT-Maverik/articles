import {blueGrey} from "@mui/material/colors";
import {type SxProps} from "@mui/system";
import {theme} from "@styles/theme.styles";

const app: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    userSelect: "none",
} as const;

const main: SxProps = {
    flexGrow: 1,
    backgroundColor: blueGrey[50],
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
} as const;

export const style = {
    app,
    main,
}
