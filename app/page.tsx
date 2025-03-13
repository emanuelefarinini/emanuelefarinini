import { Loading }  from '@/components/TextShimmer'

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
   
    <>
    <section className='flex flex-col w-screen h-screen items-center justify-center'>
      <Loading/>
    </section>
    </>
    
  );
}
