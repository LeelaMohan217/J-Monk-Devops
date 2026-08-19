import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { stagger, riseIn } from "../../../shared/variants";
import { blogPosts } from "../blogPosts";

const Blog = () => {
  return (
    <>
      <section className="border-b border-neutral-200 bg-stone-50 pt-32 pb-14 md:pt-40 md:pb-20">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl px-6 md:px-8"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            Blog
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-900 md:text-6xl">
            Notes from the study abroad process.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Practical guidance on exams, applications, visas, and life
            abroad — from the questions students ask us most.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={riseIn(0.1)}>
                <Link
                  to={`/educonnect/blog/${post.slug}`}
                  className="flex h-full flex-col gap-3 p-7 bg-neutral-50 border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="w-fit text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                    {post.tag}
                  </span>
                  <h3 className="font-semibold text-lg text-neutral-900 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
