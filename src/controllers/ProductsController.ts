import { Request, Response } from "express";
import { getProductService } from "../services/ProductsService";

export const getProduct = async (req: Request, res: Response) => {
  const HttpResponse = await getProductService();
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
