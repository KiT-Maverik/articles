import Box from '@mui/material/Box';
import {Stack} from "@mui/system";
import Head from 'next/head';

import {ArticleCard} from "@components/article-card/article-card";
import {style as rootStyle} from '@styles/root.style';
import {style as pageStyle} from '@styles/pages/home.style';
import {container, containerPosition} from "@styles/utility.styles";
import type {InferGetStaticPropsType, GetStaticProps} from 'next'
import {I_Article} from "src/types/content.types";
import Typography from "@mui/material/Typography";

export default function Home({
                                 articles,
                             }: InferGetStaticPropsType<typeof getStaticProps>) {

    const renderArticles = () => {
        return articles.map(item => <ArticleCard {...item} key={item.id}/>)
    }

    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="description" content="Articles fancy page"/>
            </Head>

            <Box component='main' sx={rootStyle.main}>
                <Stack gap={10} my={10} sx={[container, containerPosition]}>
                    <Typography variant="h5" align='center' color="text.disabled">News</Typography>
                    <Box sx={pageStyle.articles}>
                        {renderArticles()}
                    </Box>
                </Stack>
            </Box>
        </>
    )
}


export const getStaticProps = (async (context) => {
    const rs = await fetch('http://localhost:3001/articles')
    const articles: I_Article[] = await rs.json()
    return {props: {articles}}
}) satisfies GetStaticProps<{
    articles: I_Article[],
}>
