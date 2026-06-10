import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: { label: string; href: string };
};

/** Calm, premium empty state that redirects discovery instead of dead-ending. */
export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-line bg-surface/50 px-6 py-16 text-center">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>
      ) : null}
      {action ? (
        <Button href={action.href} variant="outline" size="sm" className="mt-6">
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
