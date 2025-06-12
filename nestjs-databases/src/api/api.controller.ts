import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Account as AccountModel } from '@prisma/client';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) { }

    @Get()
    async getAccount(): Promise<AccountModel[]> {
        return this.apiService.getAccount({});
    }

}