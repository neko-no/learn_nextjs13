import { Article } from "./types";
import {notFound} from 'next/navigation';

// 全記事取得
export const getAllAritcles = async(): Promise<Article[]>  => {
    // SSRでの取得を行う
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store"});

    if(!res.ok){
        throw new Error('エラーが発生しました')
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const articles = await res.json();
    return articles;
};

// 記事詳細取得
export const getDetailAritcle = async(id: string): Promise<Article>  => {
    // ISRでの取得を行う
    const res = await fetch(`http://localhost:3001/posts/${id}`, { next: {revalidate: 60}});

    if(res.status === 404){
        notFound();
    }

    if(!res.ok){
        throw new Error('エラーが発生しました')
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const article = await res.json();
    return article;
};
