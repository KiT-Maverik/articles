import Typography from "@mui/material/Typography";
import {lorem} from "@utils/lorem.utils";
import {NoSsr} from "@mui/base";

export function MockArticle() {

    return (
        <NoSsr>
            <Typography gutterBottom variant='body1'>{lorem.generateSentences(10)}</Typography>
            <Typography gutterBottom variant='h6'>{lorem.generateSentences(1)}</Typography>
            <Typography gutterBottom variant='body1'>{lorem.generateSentences(15)}</Typography>
            <Typography gutterBottom variant='body1'>{lorem.generateSentences(10)}</Typography>
        </NoSsr>
    )
}
