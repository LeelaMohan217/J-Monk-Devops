import { Image as ImageIcon } from "lucide-react";

// Renders a post's image, or a placeholder while there isn't one. Shared by the
// blog index cards and the article page so both stay in step.
//
// To drop real artwork in later, add `image` (an imported asset) and `imageAlt`
// to the post in src/sites/educonnect/blogPosts.js — no component changes
// needed. The diagonal hatch is deliberately obvious: a placeholder should not
// be mistakable for a finished design decision.
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
