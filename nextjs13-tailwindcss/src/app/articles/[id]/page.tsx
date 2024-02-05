import { getDetailAritcle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailAritcle(params.id);

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
    </div>
  );
};

export default Article;
