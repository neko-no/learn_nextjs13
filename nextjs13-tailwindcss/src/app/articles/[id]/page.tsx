import DeleteButton from "@/app/Components/DeleteButton";
import { getDetailAritcle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  // const detailArticle = await getDetailAritcle(params.id);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/${params.id}`, {
    next: { revalidate: 10 },
  });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        width="1000"
        height="500"
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt=""
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div>
        <p className="text-lg leading-relaxed text-justify">
          {detailArticle.content}
        </p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
