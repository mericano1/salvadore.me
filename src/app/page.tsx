import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getPostData } from '../lib/posts';
import { 
  AtSymbolIcon,
  CodeBracketIcon,
  UserIcon 
} from '@heroicons/react/24/outline';

export const dynamic = 'force-static';

async function getBioContent() {
  const bioContent = await getPostData("bio");
  return bioContent;
}

const renderSocials = () => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
    <Image 
      className="object-cover w-32 h-32 mx-auto rounded-full ring-4 ring-gray-200 dark:ring-gray-700" 
      src="/me.jpg" 
      alt="Andrew Salvadore" 
      width={128} 
      height={128} 
      priority
    />
    <ul className="mt-6 space-y-3 flex flex-col items-center">
      <li>
        <a href="https://twitter.com/mericano1" 
           className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition text-base">
          <AtSymbolIcon className="w-5 h-5 mr-2" />
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/mericano1" 
           className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition text-base">
          <CodeBracketIcon className="w-5 h-5 mr-2" />
          GitHub
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/asalvadore" 
           className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-700 transition text-base">
          <UserIcon className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
);

export default async function Home() {
  const bioContent = await getBioContent();
  
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <aside className="md:col-span-1 lg:col-span-1">
          <div className="sticky top-8">
            {renderSocials()}
          </div>
        </aside>
        <main className="md:col-span-3 lg:col-span-4">
          {bioContent && (
            <article className="prose dark:prose-invert prose-md max-w-none">
              {bioContent.title && <h2 className="text-3xl font-bold">{bioContent.title}</h2>}
              {bioContent.date && <p className="mt-2 text-gray-500 text-base">{bioContent.date}</p>}
              <ReactMarkdown>{bioContent.content}</ReactMarkdown>
            </article>
          )}
        </main>
      </div>
    </div>
  );
} 