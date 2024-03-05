import React from 'react';
import { GetStaticProps } from 'next';
import { getSortedPostsData, getPostData } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import '../../styles/global.css';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allPostsContent = await Promise.all(allPostsData.map(({ id }) => getPostData(id)));
  return {
    props: {
      allPostsContent
    }
  };
};


const renderSocials = () => (
    <div className="mr-8">
        <Image className="object-cover w-full h-full rounded-full" src="/me.jpg" alt="Andrew Salvadore" width={128} height={128} />
        <ul className="mt-4 space-y-2">
          <li><a href="https://twitter.com/mericano1" className="text-blue-500">Twitter</a></li>
          <li><a href="https://github.com/mericano1" className="text-gray-500">GitHub</a></li>
          <li><a href="https://linkedin.com/in/asalvadore" className="text-blue-700">LinkedIn</a></li>
        </ul>
      </div>
)

const Home: React.FC<{ allPostsContent: { date: string; title: string; id: string; content: string; }[] }> = ({ allPostsContent }) => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex items-start max-w-2xl mx-auto mb-16">
        {renderSocials()}
      <div>
        {allPostsContent.map(({ id, date, title, content }) => (
          <div key={id} className="flex flex-col items-start mb-16">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-500">{date}</p>
            <ReactMarkdown className="prose prose-lg mt-6" >{content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  </div>
  );

export default Home;