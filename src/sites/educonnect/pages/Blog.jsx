import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { riseIn } from "../../../shared/variants";
import { blogPosts } from "../blogPosts";
import PageHeaderSection from "./blog/PageHeaderSection";

const Blog = () => {
  return (
    <>
      <PageHeaderSection />

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={riseIn(Math.min(index, 3) * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  to={`/educonnect/blog/${post.slug}`}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-surface-muted p-6 transition-colors duration-300 hover:border-red-200"
                >
                  <span className="w-fit text-xs font-medium uppercase tracking-[0.2em] text-red-600">
                    {post.tag}
                  </span>
                  <h2 className="text-lg font-semibold text-neutral-900 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
