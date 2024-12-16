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

export async function createSnippet(formState: {message: string},formData: FormData) {
    // This needs to be a server action
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== 'string' || title.length < 3) {
        return {
            message: 'Title must be longer'
        };
    }
    if (typeof code !== 'string' || code.length < 10) {
        return {
            message: 'Title must be longer'
        };
    }

    const snappet = await db.snippet.create({
      data: {title,code},
    });
    
    redirect('/snippet/details');
  }
