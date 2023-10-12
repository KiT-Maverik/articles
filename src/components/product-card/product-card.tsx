import AddIcon from "@mui/icons-material/Add";
import {Card,CardMedia,CardContent,CardActions,Button} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {hidden} from "@styles/utility.styles";

import {style} from "./product-card.style";

interface I_ProductCardProps {
    id?: string;
    label?: string;
    image?: string;
    price?: number;
    discount?: number;
}

// TODO (MSD-167): Add hover effect
export const ProductCard = ({
                                image = '/img/tshirt.webp',
                                label = 'Great T-shirt',
                                price = 100,
                                discount = 49,
                                // TODO (MSD-60): Remove stubs when API ready
                            }: I_ProductCardProps) => {

    return (
        <Card sx={style.container}>
            <CardMedia image={image} sx={style.media}/>
            <CardContent sx={style.content.container}>
                <Typography variant="h5">
                    {label}
                </Typography>
                <Box sx={style.content.price.container}>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={(discount) ? style.content.price.discount : hidden}>
                        {`$${discount}`}
                    </Typography>
                    <Typography
                        component="span"
                        variant={(!!discount) ? "subtitle1" : "h6"}
                        sx={style.content.price.total(!!discount)}>
                        {`$${price}`}
                    </Typography>
                </Box>
                <CardActions sx={style.content.actions}>
                    <Button
                        variant="outlined"
                        sx={style.content.ctaButton}>
                        <AddIcon/>
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};
