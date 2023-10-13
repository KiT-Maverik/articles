import {Stack} from "@mui/system";
import {container, containerPosition} from "@styles/utility.styles";
import type {GetStaticProps, InferGetServerSidePropsType} from 'next'
import {I_Article} from "src/types/content.types";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import {T_CommentFormData, schema} from "@utils/forms/comment.form";
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, TextField} from '@mui/material';
import {postData} from "@utils/fetch.utils";
import {MockArticle} from "@components/mock-article/mock-article";
import {api} from "@constants/api.constants";
import {Divider} from "@mui/material";
import {style} from "@styles/pages/article.style";

export default function ArticlePage({
                                        article,
                                    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: {errors}
    } = useForm<T_CommentFormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = () => {

        postData(
            api.comment.list,
            {
                ...getValues(),
                time: Date.now(),
                type: 'comment',
                parent: article.id,
            }
        ).then((data) => {
            console.log('It works!');
            console.log(data);
            reset();
        });
    }

    return (
        <>
            <Stack gap={5} my={10} sx={[container, containerPosition]}>
                <Typography gutterBottom variant='h4'>{article.title}</Typography>
                <MockArticle/>
                <Divider/>
                <Stack sx={style.commentForm} gap={3} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Name"
                        {...register("by")}
                        error={!!errors.by}
                        placeholder='Enter your name'
                        fullWidth/>
                    <TextField
                        label="Comment"
                        {...register("text")}
                        error={!!errors.text}

                        placeholder='Enter your comment here'
                        fullWidth/>
                    <Button variant='contained' fullWidth size="large" type='submit'>Comment</Button>
                </Stack>
            </Stack>
        </>
    )
}


export const getServerSideProps = (async (context) => {
    const {articleId} = context.query;
    const rs = await fetch(api.article.byId(articleId))
    const article: I_Article = await rs.json()
    return {props: {article}}
}) satisfies GetStaticProps<{
    article: I_Article,
}>