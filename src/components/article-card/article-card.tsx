import {Card, CardMedia, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

import {Chip} from "@mui/material";

import {style} from "./article-card.style";
import {I_Article} from "src/types/content.types";
import {Stack} from "@mui/system";
import {route} from "@constants/page-routes.constants";
import {useRouter} from "next/router";

export const ArticleCard = ({id, title, description, cover, tags}: I_Article) => {
    const {push} = useRouter();

    const renderTags = () => {
        return tags.map(item => <Chip label={item} key={item}/>)
    }

    return (
        <Card sx={style.container} onClick={() => push(route.article(id))}>
            <CardMedia image={cover} sx={style.media}/>
            <CardContent sx={style.content.container}>
                <Typography variant="subtitle1" color="primary">
                    {title}
                </Typography>
                <Typography variant="body2" sx={style.content.description} color="text.secondary">
                    {description}
                </Typography>
                <Stack direction="row" gap={2}>
                    {renderTags()}
                </Stack>
            </CardContent>
        </Card>
    );
};
