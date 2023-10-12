import {type SxProps} from "@mui/system";

const container: SxProps = {
    minWidth: 180,
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
} as const;

const media: SxProps = {
    width: '100%',
    aspectRatio: 4 / 3,
} as const;

const contentContainer: SxProps = {
    display: "flex",
    flexDirection: 'column',
    gap: 3,
    flexGrow: 1,
} as const;

const description: SxProps = {
    textAlign: "justify",
    flexGrow: 1
} as const;

export const style = {
    container,
    media,
    content: {
        container: contentContainer,
        description,
    }
}
