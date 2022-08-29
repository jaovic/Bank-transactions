import { IsNotEmpty } from 'class-validator';
import { MessagesHelper } from 'src/helpers/message.helper';
export class SendTed {
  @IsNotEmpty({ message: MessagesHelper.PAYERACCOUNTID_REQUIRED })
  payerAccountId: string;
  @IsNotEmpty({ message: MessagesHelper.RECEIVINGACCOUNTID_REQUIRED })
  receivingAccountId: string;
  @IsNotEmpty({ message: MessagesHelper.VALUE_REQUIRED })
  value: number;
  @IsNotEmpty({ message: MessagesHelper.PAYERAGENCY_REQUIRED })
  payerAgency: string;
  @IsNotEmpty({ message: MessagesHelper.PAYERBANK_REQUIRED })
  payerBank: string;
  @IsNotEmpty({ message: MessagesHelper.RECEIVINGAGENCY_REQUIRED })
  receivingAgency: string;
  @IsNotEmpty({ message: MessagesHelper.ECEIVINGBANK_REQUIRED })
  receivingBank: string;
}
