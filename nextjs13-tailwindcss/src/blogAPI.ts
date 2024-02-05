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

// 記事新規投稿
export const createAritcle = async(id: string, title: string, content: string): Promise<Article>  => {

    console.log(id, title, content);
    const currentDatetime = new Date().toISOString();
    const res = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers:{
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({id, title, content, currentDatetime: currentDatetime})
    });


    if(!res.ok){
        throw new Error('エラーが発生しました')
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newArticle = await res.json();
    return newArticle;
};

// 記事削除機能
export const deleteAritcle = async(id: string): Promise<Article>  => {

    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE'
    });


    if(!res.ok){
        throw new Error('エラーが発生しました')
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const deleteArticle = await res.json();
    return deleteArticle;
};
