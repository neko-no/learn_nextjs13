import { Article } from "./types";

// 全記事取得
export const getAllAritcles = async(): Promise<Article[]>  => {
    // SSRでの取得を行う
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store"});

    if(!res.ok){
        throw new Error('エラーが発生しました')
    }

    const articles = await res.json();
    return articles;
};
