export class tedPaymentoDto {
  body: {
    payerAccountId: string;
    receivingAccountId: string;
    value: number;
    payerAgency: number;
    payerdBank: number;
    receivingAgency: number;
    receivingBank: number;
  };
}
