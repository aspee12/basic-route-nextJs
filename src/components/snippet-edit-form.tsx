'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';
import * as actions from '@/actions';


interface SnippetEditProps {
    snippet: Snippet
}
export default function SnippetEditForm ({snippet}: SnippetEditProps) {
    const [code, setCode] = useState(snippet.code);
    const onEditEventChange = (value: string = "") => {
        setCode(value);
    }

    const submitEditSnippet = actions.updateSnippet.bind(null, snippet.id, code);
    return (
        <div className='mt-2 p-2'>
            <Editor height={'40vh'} 
                theme='vs-dark' 
                language='javascript' 
                defaultValue={snippet.code}
                options={{ minimap: {enabled: false} }}
                onChange={ onEditEventChange } />
            <div className='flex justify-end mt-4'>
                <form action={submitEditSnippet}>
                    <button type='submit' className='p-2 border rounded bg-green-200'> Update Snippet </button>
                </form>
            </div>    
        </div>
    );
}