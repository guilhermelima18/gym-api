import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class PrismaUsersRepository {
	async create(data: Prisma.UserCreateInput) {
		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password_hash: data.password_hash,
			},
		});

		return user;
	}
}