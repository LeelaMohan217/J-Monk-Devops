import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { fadeIn } from "../../../shared/variants";
import { getBlogPostBySlug } from "../blogPosts";

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
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-red-600 transition-colors duration-300 hover:text-red-700"
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
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-red-700"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Blog
          </Link>

          <span className="mt-6 block w-fit text-xs font-medium uppercase tracking-[0.2em] text-red-600">
            {post.tag}
          </span>
          <h1 className="mt-4 text-display-sm font-semibold leading-tight text-neutral-900 sm:text-display-md">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </motion.div>
      </section>

      <div className="border-t border-neutral-200" />

      <section className="bg-surface py-16 md:py-20">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl px-6 md:px-8 flex flex-col gap-6"
        >
          {post.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-neutral-700"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>
    </article>
  );
};

export default BlogPost;
