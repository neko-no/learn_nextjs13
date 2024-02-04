import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-5">
        <Link href="#" className="hover:opacity-75">
          <Image
            width="1000"
            height="500"
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-5">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover: text-gray-700 pb-4"
          >
            Next.js勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            By neko-no, published 02/04
          </p>
          <Link href="#" className="text-slate-900 pb-6 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repudiandae eligendi nemo corrupti assumenda blanditiis molestiae
            perspiciatis asperiores ipsum ad dicta eveniet placeat, officiis
            repellat quidem officia vitae non saepe!
          </Link>
          <Link href="#" className="text-pink-700 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
