import SharedComponent from '@/components/shared-component';
import { db } from '@/db ';
import Link from 'next/link';

export default async function DisplaySnippetPage() {
    const snippets = await db.snippet.findMany();

    const renderListSnippets = snippets.map((snippet) => {
        return (
            <div className='container mx-auto flex flex-col mt-2 w-[45%] border rounded p-2' key={snippet.id}>
                <div className='flex justify-between items-center text-white'>
                    <span className='text-2xl'>{snippet.title}</span>
                    <Link className='text-xl mr-4 text-blue-500 hover:underline' href={`/snippet/${snippet.id}`}> View More </Link>
                </div>
            </div>
        );
    });

    return(
         <SharedComponent imageUrl={'/snippet.avif'} imageAlt='' titile='Display List Of Snippets'>
            <div className='mt-8'>
                <div className='mx-auto flex m-2 justify-between items-center w-[45%]'>
                    <h1 className='text-xl font-bold text-cyan-200'>Snippets</h1>
                    <Link href={'/snippet'} className='border bg-blue-300 p-2 rounded'>Add New</Link>
                </div>
                <div className='mt-4'>{renderListSnippets}</div>
            </div>
        </SharedComponent>
    );
}