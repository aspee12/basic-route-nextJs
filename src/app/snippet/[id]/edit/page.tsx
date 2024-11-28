import SharedComponent from '@/components/shared-component';
import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db ';
import { notFound } from 'next/navigation';

interface SnippetEditParam {
    params: {
        id: string;
    }
}
export default async function SnippetEditPage(prop: SnippetEditParam) {
    const id = parseInt(prop.params.id);
    const snippetEditData = await db.snippet.findFirst({
        where: { id }
    });

    if(!snippetEditData){
        notFound();
    }

    return (
        <SharedComponent imageUrl={'/snippet.avif'} imageAlt='Snippet edit' titile='Edit Snippet By Id'>
            <div className='container mx-auto mt-4 w-[45%]'>
                <h1 className="text-xl font-bold mt-2 text-cyan-200">{snippetEditData.title}</h1>
                <div>
                    <SnippetEditForm snippet={snippetEditData}></SnippetEditForm>
                </div>
            </div>
        </SharedComponent>
    )
}