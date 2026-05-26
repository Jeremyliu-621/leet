import { useRef, useCallback } from 'react';

interface DraggableSplitterProps {
  /** Called continuously while dragging with the new ratio (clamped to [0.2, 0.8]). */
  onRatioChange: (ratio: number) => void;
  /** Called once when the drag ends with the final ratio (for persistence). */
  onRatioCommit: (ratio: number) => void;
}

/**
 * A vertical drag handle placed between the problem panel and the editor panel.
 * Dragging it updates the split ratio in real time; releasing the mouse commits
 * the value to persistent storage.
 *
 * The host layout must be a horizontal flexbox (e.g. `flex flex-row`). The
 * splitter sits between the two flex children and calls back with a 0–1 ratio
 * that the parent applies as `flex-basis` on the left panel.
 */
export function DraggableSplitter({ onRatioChange, onRatioCommit }: DraggableSplitterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;

      // Walk up to find the flex container (the main element in Challenge.tsx).
      const container = containerRef.current?.closest('[data-split-container]') as HTMLElement | null;
      if (!container) return;

      function handleMouseMove(moveEvent: MouseEvent) {
        if (!isDraggingRef.current) return;
        const rect = container!.getBoundingClientRect();
        const raw = (moveEvent.clientX - rect.left) / rect.width;
        const ratio = clamp(raw, 0.2, 0.8);
        onRatioChange(ratio);
      }

      function handleMouseUp(upEvent: MouseEvent) {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        const rect = container!.getBoundingClientRect();
        const raw = (upEvent.clientX - rect.left) / rect.width;
        const ratio = clamp(raw, 0.2, 0.8);
        onRatioCommit(ratio);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }

      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [onRatioChange, onRatioCommit],
  );

  return (
    <div
      ref={containerRef}
      role="separator"
      aria-label="Resize panels"
      aria-orientation="vertical"
      onMouseDown={handleMouseDown}
      className="group hidden shrink-0 cursor-col-resize items-center justify-center lg:flex"
      style={{ width: '9px' }}
    >
      {/* Visual track */}
      <div
        aria-hidden="true"
        className="h-full w-px bg-border transition-colors group-hover:bg-border-strong group-active:bg-accent"
      />
    </div>
  );
}
