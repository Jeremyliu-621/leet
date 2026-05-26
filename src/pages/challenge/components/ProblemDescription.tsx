import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import type { Components } from 'react-markdown';
import type { ReactNode } from 'react';

// Only register the two languages the bank actually uses in code blocks.
const HIGHLIGHT_LANGUAGES = { javascript, python };

const rehypeHighlightOptions = {
  languages: HIGHLIGHT_LANGUAGES,
  detect: false,
  ignoreMissing: true,
};

interface ProblemDescriptionProps {
  /** Markdown source. Plain-text content renders cleanly too. */
  markdown: string;
}

// Custom component map so the rendered markdown stays inside LeetLock's
// pure-grayscale design system. Each component is stable across renders.
const components: Components = {
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-sm leading-relaxed text-text">{children}</p>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }: { children?: ReactNode }) => <em className="italic">{children}</em>,
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded-sm bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-text">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="overflow-x-auto rounded-card border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-text">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="ml-5 list-decimal space-y-1 text-sm leading-relaxed text-text">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-text underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-2 border-border pl-3 text-sm text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-4 border-border" />,
  h1: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-base font-semibold text-text">{children}</h2>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-sm font-semibold text-text">{children}</h3>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h4 className="text-sm font-semibold text-text">{children}</h4>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-mono text-xs text-text">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="border-b border-border">{children}</thead>
  ),
  tbody: ({ children }: { children?: ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children?: ReactNode }) => (
    <tr className="border-b border-border last:border-0">{children}</tr>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="px-3 py-1.5 text-left font-semibold text-muted">{children}</th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="px-3 py-1.5 text-text">{children}</td>
  ),
};

/**
 * Renders a problem description (or hint body) as markdown. GitHub-flavoured
 * markdown is supported; raw HTML is NOT — react-markdown disables it by
 * default, which matters because problem content is data shipped in the
 * extension bundle and we don't want a future bug authoring problems with
 * `<script>` to become a content-injection vector.
 */
export function ProblemDescription({ markdown }: ProblemDescriptionProps) {
  return (
    <div className="space-y-3 text-text">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, rehypeHighlightOptions]]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
