import Head from 'next/head'
import Link from 'next/link';
import { getPosts } from 'lib/getpost';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { usePosts } from 'hooks/getPostById';

export default function Home() {

  const { data, isLoading } = usePosts();
  console.log(data)
  if (isLoading) return <p>Loading....</p>
  return (
    <div className='flex justify-center items-center h-full'>
      <Head>
        <title>React | Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-xl font-bold underline'>{data.map(item => {
        return (
          <Link href={`/posts/${item.id}`}>
          <p key={item.id}> {item.title}</p>
          </Link>
        )
      }

      )}</div>


    </div>
  )
}


export const getServerSideProps = async (ctx) => {

  const queryClient = new QueryClient()
  // prefetch data on the server
  await queryClient.fetchQuery(['posts'], () => getPosts())

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  }
}

