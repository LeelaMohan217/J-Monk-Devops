import { ArrowUpRight } from "lucide-react";

const BlogBody = ({ body }) => {
  return (
    <>
      {body.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl"
              >
                {block.text}
              </h2>
            );

          case "ul":
          case "ol":
            return (
              <ul key={index} className="flex flex-col gap-4">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    {block.type === "ol" ? (
                      <span
                        className="mt-1 shrink-0 text-xs font-medium tabular-nums text-neutral-400"
                        aria-hidden="true"
                      >
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                    ) : (
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-base leading-relaxed text-neutral-700 md:text-lg">
                      {item.term && (
                        <strong className="font-medium text-neutral-900">
                          {item.term}.{" "}
                        </strong>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "spec-list":
            return (
              <ol key={index} className="border-t border-neutral-200">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="grid grid-cols-[1.75rem_1fr] gap-y-1 border-b border-neutral-200 py-4"
                  >
                    <span
                      className="text-xs font-medium tabular-nums text-neutral-400"
                      aria-hidden="true"
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium tracking-tight text-neutral-900 md:text-base">
                      {item.name}
                    </span>
                    <span className="col-start-2 text-xs text-neutral-500 md:text-sm">
                      {item.meta}
                    </span>
                    {item.note && (
                      <span className="col-start-2 mt-1 text-sm leading-relaxed text-neutral-600">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            );

          case "salary-list":
            return (
              <dl key={index} className="border-t border-neutral-200">
                {block.items.map((item) => (
                  <div
                    key={item.role}
                    className="flex items-baseline justify-between gap-4 border-b border-neutral-200 py-3"
                  >
                    <dt className="text-sm text-neutral-700 md:text-base">
                      {item.role}
                    </dt>
                    <dd className="text-sm font-medium tabular-nums text-neutral-900 md:text-base">
                      {item.amount}
                    </dd>
                  </div>
                ))}
              </dl>
            );

          case "links":
            return (
              <ul key={index} className="flex flex-col gap-2">
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:text-red-700"
                    >
                      {item.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            );

          case "p":
          default:
            return (
              <p
                key={index}
                className="text-base leading-relaxed text-neutral-700 md:text-lg"
              >
                {block.text}
              </p>
            );
        }
      })}
    </>
  );
};

export default BlogBody;
