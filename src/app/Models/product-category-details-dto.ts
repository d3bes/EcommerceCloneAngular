import { ProductCategoryDTO } from "./product-category-dto";

export interface ProductCategoryDetailsDTO {
  id: number;
  name: string;
  imgUrl?: string | null;
  parentCategoryId?: number | null;
  childrenCategories?: ProductCategoryDTO[] | null;
}
