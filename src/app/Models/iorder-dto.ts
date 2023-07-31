import { IorderItemDTO } from "./iorder-item-dto";

export interface IorderDTO {
    orderId: string;
    userId: string;
    orderDate: string; 
    shipToAddressId?: number | null; 
    paymentIntentId?: number | null; 
    deliveryMethodId: number;
    items?: IorderItemDTO[] | null; 
}
