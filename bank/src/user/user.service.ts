import { depositDto } from './dto/deposit.dto';
import { RepositoryService } from './../repository/repository.service';
import { Injectable } from '@nestjs/common';
import { newClientDto } from './dto/new.client.dto';
import { tedPaymentoDto } from './dto/ted.payment.dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: RepositoryService) {}

  async getClient(body: newClientDto) {
    await this.repository.saveClient(body);
  }

  async getPayments(body: tedPaymentoDto) {
    return await this.repository.findByAccountId(body.body.payerAccountId);
  }

  async deposit(body: depositDto) {
    const { AccountId, value } = body.body;
    const data = await this.repository.findByAccountId(AccountId);
    const newValue = data.balance + value;
    return await this.repository.saveDeposit(AccountId, newValue);
  }
}
