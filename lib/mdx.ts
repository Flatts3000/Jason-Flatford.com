import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * The directory where your MDX files live. Each `.mdx` file should
 * include frontmatter (YAML) describing its metadata (title, date,
 * summary). The slug (URL) for each page is derived from the file name.
 */
const CONTENT_DIR = path.join(process.cwd(), 'content');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
};

/**
 * Return a list of all posts with their metadata. This function reads
 * each MDX file in the content directory and parses the frontmatter
 * using `gray-matter`. Use this data to build index pages or sitemaps.
 */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.mdx'));
  return files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx?$/, ''),
      title: data.title || filename,
      date: data.date || '',
      summary: data.summary || ''
    };
  });
}

/**
 * Retrieve the raw source and metadata for a single MDX file by slug.
 * This helper can be used inside `getStaticProps` functions when
 * generating static pages.
 */
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const filePath = path.join(CONTENT_DIR, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    meta: {
      slug: realSlug,
      title: data.title || realSlug,
      date: data.date || '',
      summary: data.summary || ''
    },
    content
  };
}