import { COLORS, SIZES } from "@/shared/constants/product.constants";
import { BaseModel } from "./BaseModel.interface";
import { Category } from "./Category.interface";

type Colors = keyof typeof COLORS
type Sizes = (typeof SIZES)[number]

export interface Product extends BaseModel {
  img_url: string,
  name: string,
  available_units: number,
  price: number,
  colors: Colors[],
  sizes: Sizes[],
  categoryId: string,
  category: Category
}