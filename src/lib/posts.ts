// lib/posts.ts

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/posts');

interface PostData {
  id: string;
  content: string;
  title?: string;
  date?: string;
  [key: string]: any;
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Combine the data with the id and content
    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    };
}