import { ParallaxWithHeader, MaxWidthWrapper, Pagination } from "@/components";
import { blogs } from "./blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
    return (
        <>
            <ParallaxWithHeader title="Our Blog" />
            <section className="py-24 flex flex-col justify-around">
                <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                   
                </MaxWidthWrapper>
                <Pagination />
            </section>
        </>
    );
}
