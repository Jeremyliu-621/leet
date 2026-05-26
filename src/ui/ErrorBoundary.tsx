import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Top-level error boundary. Catches unhandled render/lifecycle errors and
 * shows a plain recovery UI instead of a blank screen.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-8 text-center">
        <p className="font-mono text-sm font-semibold text-text">Something went wrong</p>
        <p className="max-w-sm font-mono text-xs text-muted">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 rounded-sm border border-border bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:bg-surface-2 hover:text-text"
        >
          Reload
        </button>
      </div>
    );
  }
}
