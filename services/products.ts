import { Product } from "@prisma/client";
import axiosInstance from "./axios";
import { ApiRoutes } from "./constants";

export const search = async (query: string) => {
  const res = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  });

  return res.data;
};