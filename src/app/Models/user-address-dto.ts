import { AddressDTO } from "./address-dto";

export interface UserAddressDTO {
    Id: number;
    isDefault: boolean;
    Address: AddressDTO;
    AddressID: number;
    userId: string;
}
