import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './Models/iproduct';

@Pipe({
  name: 'searchPrduct'
})
export class SearchPrductPipe implements PipeTransform {

  transform(products:Iproduct[],searchProduct:string): Iproduct[] {
    return products.filter((product)=>product.name.toLowerCase().includes(searchProduct.toLowerCase()));
  }

}
