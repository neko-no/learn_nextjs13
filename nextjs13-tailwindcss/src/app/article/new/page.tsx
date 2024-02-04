import React from "react";

const CreateBlogPage = () => {
  return (
    <div className="min-h-screen ">
      <h2 className="text-2xl font-blod">ブログ新規作成</h2>
      <form className="p-6">
        <div className="mb-5">
          <label>URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <label>タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <label>本文</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>

        <button type="submit" className="py-2 px-4 rounded-md border">
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
