export interface ProductCategoryDTO {
    id: number;
    name: string;
    imgUrl?: string | null;
    parentCategoryId?: number | null;
}
