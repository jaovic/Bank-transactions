import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [UserModule, RepositoryModule],
  providers: [UserService],
})
export class AppModule {}
