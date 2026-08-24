import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../shared/variants";
import { blogPosts } from "../blogPosts";
import PageHeaderSection from "./blog/PageHeaderSection";
import PostImage from "./blog/PostImage";

// Cards on a grid — the one place in EduConnect that uses them, since posts
// lead with artwork and read as a set of objects rather than an index of rows.
// Every other section on the site stays on hairlines and type.
//
// Excerpts are clamped to three lines so the meta footer sits on the same
// baseline across a row regardless of copy length.
const Blog = () => {
  return (
    <>
      <PageHeaderSection />

      <section className="bg-surface pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.li
                key={post.slug}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  to={`/educonnect/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-surface transition-colors duration-300 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <div className="aspect-16/10 overflow-hidden border-b border-neutral-200">
                    <PostImage
                      post={post}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <span className="text-xs tabular-nums text-neutral-400">
                      {post.date}
                    </span>

                    <h2 className="mt-3 text-base font-medium leading-snug tracking-tight text-neutral-900 decoration-neutral-300 underline-offset-4 group-hover:underline md:text-lg">
                      {post.title}
                    </h2>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>

                    {/* mt-auto pins the footer to the card's base, so read
                        times line up across a row despite 2- and 3-line titles. */}
                    <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-neutral-400">
                      {post.readTime}
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
