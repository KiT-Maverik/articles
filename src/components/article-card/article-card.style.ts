import {type SxProps} from "@mui/system";

const container: SxProps = {
    minWidth: 180,
    maxWidth: 400,
} as const;

const media: SxProps = {
    width: '100%',
    aspectRatio: 4 / 3,
} as const;

export const style = {
    container,
    media,
}
