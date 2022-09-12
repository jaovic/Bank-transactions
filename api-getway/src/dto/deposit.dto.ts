import { IsNotEmpty } from 'class-validator';
import { MessagesHelper } from 'src/helpers/message.helper';
export class depositDto {
  @IsNotEmpty({ message: MessagesHelper.ACCOUNT_ID_REQUIRED })
  AccountId: string;
  @IsNotEmpty({ message: MessagesHelper.VALUE_REQUIRED })
  value: number;
  @IsNotEmpty({ message: MessagesHelper.AGENCY_REQUIRED })
  agency: string;
}
