import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

/**
 * Override default rendering for certain elements in MDX. When you use
 * MDX files under the `content/` directory, these components will be
 * used in place of the default HTML elements. For example, images will
 * be rendered using Next.js' `<Image />` component for automatic
 * optimisation. Extend or replace these components to suit your needs.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map regular images to the Next.js Image component for better
    // performance and automatic resizing. You can adjust width/height
    // values or enable responsive layout.
    img: (props) => (
      <Image
        {...props}
        alt={props.alt ?? ''}
        width={800}
        height={450}
        className="my-6"
      />
    ),
    ...components
  };
}