import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/post");
  };
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });
  console.log("ddd", data);
  return <div>ReactQueryPage</div>;
};

export default ReactQueryPage;
