"use client";

import React, { useState, useEffect } from "react";
import PostContent from "@/components/PostContent";
import { PostMetadata } from "@/components/PostMetadata";
import Layout from "@/components/style/Layout";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/posts`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="mx-auto">
      <Layout title="Blog">
        {" "}
        {error ? <div>Error: {error}</div> : <PostContent posts={posts} />}
      </Layout>
    </main>
  );
};

export default BlogPage;
