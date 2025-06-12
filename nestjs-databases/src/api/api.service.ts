import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Account, Prisma } from '@prisma/client';

@Injectable()
export class ApiService {
    constructor(private prisma: PrismaService) { }

    async getAccount(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AccountWhereUniqueInput;
        where?: Prisma.AccountWhereInput;
        orderBy?: Prisma.AccountOrderByWithRelationInput;
    }): Promise<Account[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.account.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
}
