import { BaseModel } from "./BaseModel.interface";
import { Category } from "./Category.interface";

export interface Product extends BaseModel {
  img_url: string,
  name: string,
  available_units: number,
  price: number,
  categoryId: string,
  category: Category
}