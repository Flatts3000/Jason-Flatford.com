// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    // Add custom renderers here as needed (e.g., img, code, a)
    return {
        ...components
    };
}