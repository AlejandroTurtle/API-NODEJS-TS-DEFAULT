import * as ProductRepository from "../Repositories/ProductRepository";
import { noContent, ok } from "../utils/http-helper";

export const getProductService = async () => {
  const data = await ProductRepository.findAllProducts();
  let response = null;
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
