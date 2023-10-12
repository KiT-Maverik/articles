import {type SystemCssProperties, type Theme} from "@mui/system";

import {container as layout} from "@styles/utility.styles";

const container: SystemCssProperties<Theme> = {
    ...layout,

    py: 2,
} as const;

export const style = {
    container,
}
