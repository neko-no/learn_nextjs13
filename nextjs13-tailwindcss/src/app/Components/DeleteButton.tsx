"use client";

import { deleteAritcle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    // await deleteAritcle(id);
    const API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;
    await fetch(`${API_URL}/api/blog/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  };
  return (
    <div className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline">
      <button onClick={handleDelete}>削除</button>
    </div>
  );
};

export default DeleteButton;
