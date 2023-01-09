// src/users/usersService.ts
import { User } from "../models/user.model";

// A post request should not contain an id.
export type UserCreationParams = Pick<User<string>, "email" | "name" | "phoneNumbers">;

export class UsersService {
    public get(id: number, name?: string): User<string> {
        return {
            id,
            email: "jane@doe.com",
            name: name ?? "Jane Doe",
            status: "Happy",
            phoneNumbers: [],
        };
    }

    public create(params: UserCreationParams): User<string> {
        return {
            id: Math.floor(Math.random() * 10000), // Random
            status: "Happy",
            ...params,
        };
    }
}
