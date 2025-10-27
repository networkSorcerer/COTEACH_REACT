import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = (queryData) => {
    const id = queryData.queryKey[1];
    return axios.get(`http://localhost:3004/posts/${id}`);
  };
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["posts", 1],
    queryFn: fetchPost,
    retry: 1,
    staleTime: 10000,
    gcTime: 1000,
    select: (data) => {
      return data.data;
    },
    enabled: false,
  });
  console.log("ddd", data);
  console.log("error", error);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {/* {data?.map((item) => (
        <div>{item.title}</div>
      ))} */}
      <button onClick={refetch}>post 리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
