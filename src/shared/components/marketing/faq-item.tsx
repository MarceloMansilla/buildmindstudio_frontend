import { Plus } from "lucide-react";

/** Accessible, no-JS disclosure built on native <details>/<summary>. */
export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-[var(--color-border)] py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[var(--color-text)] [&::-webkit-details-marker]:hidden">
        {question}
        <Plus
          aria-hidden
          className="size-5 shrink-0 text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-45"
        />
      </summary>
      <p className="mt-3 max-w-2xl">{answer}</p>
    </details>
  );
}
