import {Card, CardMedia, CardContent, CardActions} from "@mui/material";
import Typography from "@mui/material/Typography";

import {Chip} from "@mui/material";

import {style} from "./article-card.style";
import {I_Article} from "src/types/content.types";

export const ArticleCard = ({id, title, description, cover, tags}: I_Article) => {

    const renderTags = () => {
        return tags.map(item => <Chip label={item} key={item}/>)
    }

    return (
        <Card sx={style.container}>
            <CardMedia image={cover} sx={style.media}/>
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {renderTags()}
            </CardActions>
        </Card>
    );
};
