import Image from "next/image";
import React from "react";

const Article = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        width="1000"
        height="500"
        src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
        alt=""
      />
      <h1 className="text-4xl text-center mb-10 mt-10">ここがタイトルです</h1>
      <div>
        <p className="text-lg leading-relaxed text-justify">ここが本文です</p>
      </div>
    </div>
  );
};

export default Article;
