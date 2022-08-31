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
    console.log(body.body.payerAccountId);
    const data = await this.repository.findByAccountId(
      body.body.payerAccountId,
    );
    console.log(data);
  }

  async deposit(body: depositDto) {
    console.log(body.body);
  }
}
