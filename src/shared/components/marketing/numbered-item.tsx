/** A zero-padded numbered row (01, 02, …) for ordered, sequential content. */
export function NumberedItem({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-5 border-t border-[var(--color-border)] py-7 first:border-t-0 first:pt-0 sm:gap-8">
      <span
        aria-hidden
        className="font-heading text-3xl leading-none text-[var(--color-accent)] sm:text-4xl"
      >
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 max-w-xl">{body}</p>
      </div>
    </li>
  );
}
