import { Image as ImageIcon } from "lucide-react";

const PostImage = ({ post, className = "" }) => {
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={post.imageAlt ?? ""}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-surface-muted bg-[repeating-linear-gradient(45deg,transparent,transparent_9px,rgb(0_0_0/0.02)_9px,rgb(0_0_0/0.02)_18px)] ${className}`}
      aria-hidden="true"
    >
      <ImageIcon className="h-6 w-6 text-neutral-300" />
    </div>
  );
};

export default PostImage;
