import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeIn } from "../../../shared/variants";
import { getBlogPostBySlug } from "../blogPosts";
import PostImage from "./blog/PostImage";
import TagList from "./blog/TagList";
import BlogBody from "./blog/BlogBody";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <section className="bg-surface pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <h1 className="text-3xl font-semibold text-neutral-900">
            Post not found
          </h1>
          <p className="mt-4 text-neutral-600">
            That article doesn&apos;t exist or may have been moved.
          </p>
          <Link
            to="/educonnect/blog"
            className="mt-8 inline-flex items-center gap-2 py-1 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:text-red-700"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article>
      {/* No masked-grid backdrop here — that treatment is for section
          intros/landing moments, not a page meant to be read. */}
      <section className="bg-surface pt-32 pb-12 md:pt-40 md:pb-16">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl px-6 md:px-8"
        >
          <Link
            to="/educonnect/blog"
            className="inline-flex items-center gap-2 py-1 text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-red-700"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Blog
          </Link>

          {/* Same meta treatment as the blog index: muted tag, plain small
              type for date and read time, no icons. Full tag list moves to
              the foot of the article, after the body. */}
          <span className="mt-6 block w-fit text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {post.tags[0]}
          </span>
          <h1 className="mt-4 text-display-sm font-semibold text-neutral-900 sm:text-display-md">
            {post.title}
          </h1>
          <p className="mt-6 text-xs tabular-nums text-neutral-400">
            {post.date} · {post.readTime}
          </p>
        </motion.div>
      </section>

      <div className="border-t border-neutral-200" />

      <section className="bg-surface py-16 md:py-20">
        {/* Same PostImage as the index cards, so an article isn't imageless
            while its own card carries artwork. */}
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          animate="show"
          className="mx-auto mb-12 max-w-3xl px-6 md:mb-16 md:px-8"
        >
          <div className="aspect-16/9 overflow-hidden rounded-xl border border-neutral-200">
            <PostImage post={post} />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col gap-6 px-6 md:px-8"
        >
          <BlogBody body={post.body} />

          <div className="mt-4 border-t border-neutral-200 pt-8">
            <TagList tags={post.tags} />
          </div>
        </motion.div>
      </section>
    </article>
  );
};

export default BlogPost;
