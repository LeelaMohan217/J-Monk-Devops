// Shared by the blog index cards (limited count) and the article page (full
// list), so both stay in step on pill styling.
const TagList = ({ tags, limit }) => {
  const shown = limit ? tags.slice(0, limit) : tags;
  const hidden = limit ? tags.length - shown.length : 0;

  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      {shown.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-neutral-200 px-2.5 py-1 font-['IBM_Plex_Mono',monospace] text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500"
        >
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li className="px-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          +{hidden}
        </li>
      )}
    </ul>
  );
};

export default TagList;
