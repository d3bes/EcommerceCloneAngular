export interface Iproduct {

        sku:string,
        name:string,
        categoryId:number,
        category:category,
        brandId:number,
        brand:string,
        images:string[],
        price:number,
        inStock?:boolean,
        description:string,
        reviews?:string[],
        storeId:number,
        store:string,
        quantity:number,

}

interface category{
  category:string
}
