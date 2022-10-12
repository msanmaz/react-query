import { getPost } from 'lib/getpost';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { usePost } from '../../hooks/getPostById';
import { useRouter } from 'next/router';

export const getServerSideProps = async (ctx) => {

    const { id } = ctx.params;

    const queryClient = new QueryClient()

    // prefetch data on the server
    await queryClient.fetchQuery(['post', id], () => getPost(id))

    return {
        props: {
            // dehydrate query cache
            dehydratedState: dehydrate(queryClient),
        },
    }
}

 const PostPage = () => {

    const { query: { id } } = useRouter();


    const { data, isLoading } = usePost(id);

    if (isLoading) return <p>Loading</p>

    return (
        <>
        <h1 className='text-xl uppercase font-bold'>{data.title}</h1>
        <p className='text-base'>{data.body}</p>

        </>
    )
}


export default PostPage

