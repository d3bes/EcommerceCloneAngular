export interface PaymentMethodDTO {

    paymentMethodID: number;
    provider: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    isDefault: boolean;
    userID: string;
}
