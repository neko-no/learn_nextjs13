import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between item-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next13 Blog</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link href="/articles/new">記事を書く</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
