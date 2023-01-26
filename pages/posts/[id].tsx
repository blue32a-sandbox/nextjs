import type { GetStaticPropsResult, GetStaticPropsContext, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, Post } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';

type Props = {
  postData: Post;
}
type Params = {
  id: string;
}

export default function PostPage({ postData }: Props) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const postId: string = params?.id ?? "";
  const postData = await getPostData(postId);
  return {
    props: {
      postData,
    },
  };
}
