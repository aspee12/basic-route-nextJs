import SharedComponent from "@/components/shared-component";
import { db } from "@/db ";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from '@/actions';

interface SnippetDetailProps {
  params: {
    id: string;
  };
}

export default async function SnippetViewById(props: SnippetDetailProps) {
  const snippetData = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippetData) {
    return notFound();
  }

  const deleteSnippet = actions.deleteSnippet.bind(null, snippetData.id);

  return (
    <SharedComponent
      imageUrl={"/snippet.avif"}
      imageAlt="Snippet Image"
      titile="Detail Of Snippet By Id"
    >
      <div className="container mx-auto mt-4 w-[45%]">
        <div className="flex justify-between items-center">
          <div className='flex items-center'>
          <Link className="cursor-pointer" href={"/snippet/details"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <h1 className="text-xl font-bold ml-2 text-cyan-200">{snippetData.title}</h1>
          </div>
          <div className="flex space-x-4">
            <Link className="p-2 bg-blue-300 border rounded" href={`/snippet/${snippetData.id}/edit`}>Edit</Link>
            <form action={deleteSnippet}>
              <button type='submit' className="p-2 bg-red-500 border rounded">Delete</button>
            </form>
          </div>
        </div>
        <pre className="p-4 mt-4 border rounded bg-gray-200 border-gray-200">
          <code>{snippetData.code}</code>
        </pre>
      </div>
    </SharedComponent>
  );
}
