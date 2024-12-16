'use client';

import SharedComponent from '@/components/shared-component';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(actions.createSnippet, {message: ''});
    return (
      <form action={action}>
        <SharedComponent imageUrl={'/realibility.jpg'} imageAlt='Relibility Image' titile='Bhutan Is Committed To Sustainable Tourism '>
            <div className='container mx-auto flex flex-col gap-4 mt-12'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex justify-center items-center gap-4 w-[50%]'>
                        <label className=' text-white text-2xl' htmlFor='title'> Title </label>
                        <input className='border rounded p-2 ml-8 w-[90%]' name='title' id='title' />
                    </div>
                    <div className='flex justify-center items-center gap-4  w-[50%]'>
                        <label className='text-white text-2xl' htmlFor='code'> Code </label>
                        <textarea className='border rounded p-2 w-[90%] ml-4' name='code' id='code' />
                    </div>
                </div>
                {
                  formState.message ? <div className='w-fit m-auto p-2 bg-red-200 border rounded bourder-red-400'>{formState.message}</div> : null
                }
               <div className='flex justify-center items-center '>
                <button className='rounded p-2 bg-blue-200' type='submit'>
                        Create
                    </button>
               </div>
            </div>
        </SharedComponent>
      </form>
    );
}