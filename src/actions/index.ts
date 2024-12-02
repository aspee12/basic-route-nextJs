'use server';

import { db } from '@/db ';
import { redirect } from 'next/navigation';

export async function updateSnippet(id: number, code: string) {
    await db.snippet.update({
        where: {id},
        data: {
            code
        }
    });

    redirect(`/snippet/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {id}
    });
    redirect('/snippet/details');
}