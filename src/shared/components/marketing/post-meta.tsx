import { cn } from "@/src/lib/utils";

function formatDate(iso: string) {
  // Append a fixed time so the date never shifts across timezones.
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

/** Tag · date · reading time — the byline used across the blog. */
export function PostMeta({
  tag,
  date,
  readingTime,
  className,
}: {
  tag: string;
  date: string;
  readingTime?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-text-soft)]",
        className,
      )}
    >
      <span className="text-xs font-medium tracking-[0.16em] text-[var(--color-accent)] uppercase">
        {tag}
      </span>
      <span aria-hidden className="text-[var(--color-border)]">
        ·
      </span>
      <time dateTime={date}>{formatDate(date)}</time>
      {readingTime ? (
        <>
          <span aria-hidden className="text-[var(--color-border)]">
            ·
          </span>
          <span>{readingTime}</span>
        </>
      ) : null}
    </div>
  );
}
