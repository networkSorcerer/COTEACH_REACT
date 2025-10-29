import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage2 = () => {
  const ids = [1, 2, 3, 4];
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };
  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
  });
  console.log("rrrr", results);
  return <div></div>;
};

export default ReactQueryPage2;
