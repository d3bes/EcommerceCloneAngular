export interface AddressDTO {
  Id: number;
  FirstName: string;
  LastName: string;
  fullAddress: string;
  phoneNumber: string;
  addressLabel: 'work' | 'home';
}
