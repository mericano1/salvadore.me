import { getPostData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';

export const dynamic = 'force-static';

async function getWorkContent() {
  const workContent = await getPostData("work");
  return workContent;
}

export default async function People() {
  const workContent = await getWorkContent();
  
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold mb-4">Working with People</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          My approach to leadership and team development
        </p>
        
        <article className="prose dark:prose-invert max-w-none prose-headings:text-2xl prose-p:text-base">
          {workContent && (
            <ReactMarkdown>{workContent.content}</ReactMarkdown>
          )}
        </article>
      </div>
    </div>
  );
} 