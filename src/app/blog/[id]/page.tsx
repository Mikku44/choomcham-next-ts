import Head from 'next/head'

const data = [
    { id: '0', title: 'Title1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '1', title: 'Title2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '2', title: 'Title3', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '3', title: 'Title4', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '4', title: 'Title5', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
]

export default function Page({ params }: { params: { id: string } }) 
{
    const index = parseInt(params.id)
    return <>
     <Head>
      <meta property="og:title" content={data[index].title} />
      <meta property="og:description" content={data[index].description} />
      <meta property="og:image" content={data[index].title} />
    </Head>
    <div>My Post: {params.id}</div>
    <div>{data[index].title}</div>
    </>
}