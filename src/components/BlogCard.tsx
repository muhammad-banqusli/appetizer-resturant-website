import { Blog } from "@/app/blog/blogs";
import { format } from "date-fns";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <Link href={`/blog/${blog.id}`}>
            <div className="flex flex-col px-3">
                <img
                    src={blog.imgSrc}
                    alt="blog photo"
                    className="h-[300px] object-cover"
                />
                <div className="pt-4 pb-6 flex flex-col">
                    <div className="flex gap-1 text-[15px] text-[#cccccc] leading-loose">
                        <span>{format(blog.date, "MMMM d, yyyy")}</span>
                        <span>{blog.user}</span>
                    </div>
                    <h3 className="font-semibold text-[20px] mb-3">
                        {blog.title}
                    </h3>
                    <div className="flex items-center justify-between mb-4 text-[14px]">
                        <span>Read More</span>
                        <div className="flex items-center opacity-30">
                            <MessageSquareText />
                            <span className="text-[17px] m-1">
                                {blog.commentsCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default BlogCard;
