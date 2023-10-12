import {red, grey} from "@mui/material/colors";
import {type SxProps} from "@mui/system";

const container: SxProps = {
    minWidth: 180,
    maxWidth: 400,
} as const;

const media: SxProps = {
    width: '100%',
    aspectRatio: 3 / 4,
} as const;

const contentArea = {
    label: 'label',
    price: 'price',
    actions: 'actions',
} as const;

const contentContainer: SxProps = {
    p: 3,
    display: "grid",
    columnGap: 3,
    gridTemplateColumns: '1fr auto',
    gridTemplateAreas: `
            '${contentArea.label} ${contentArea.label}'
            '${contentArea.price} ${contentArea.actions}'`,

    '&:last-child' : {
        pb: 3,
    }
} as const;

const label: SxProps = {
    gridArea: contentArea.label,
    p: 0,
} as const;

const priceContainer: SxProps = {
    gridArea: contentArea.price,
    p: 0,
} as const;

const total: (isDisabled: boolean) => SxProps =
    (isDisabled) => ({
        textDecoration: isDisabled ? 'line-through' : 'none',
        color: isDisabled ? grey[600] : 'initial',
    }) as const;

const discount: SxProps = {
    color: red[600],
    fontWeight: "bold",
    mr: 2,
} as const;

const actions: SxProps = {
    gridArea: contentArea.actions,
    p: 0,
} as const;

const ctaButton: SxProps = {
    minWidth: 'initial',
    p: 1,
} as const;

export const style = {
    container,
    media,
    content: {
        container: contentContainer,
        label,
        actions,
        price: {
            container: priceContainer,
            total,
            discount,
        },
        ctaButton,
    },
}
