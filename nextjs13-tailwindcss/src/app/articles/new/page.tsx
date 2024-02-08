"use client";
import React, { useState } from "react";
import { createAritcle } from "@/blogAPI";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;
    await fetch(`${API_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    router.push("/");
    router.refresh();

    setLoading(false);
  };

  return (
    <div className="min-h-screen ">
      <h2 className="text-2xl font-blod">ブログ新規作成</h2>
      <form className="p-6" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label>URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label>タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label>本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 rounded-md border ${
            loading && "cursor-not-allowed"
          }`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
