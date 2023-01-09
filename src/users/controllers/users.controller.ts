// src/users/usersController.ts
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags } from "tsoa";
import { User } from "../models/user.model";
import { UsersService, UserCreationParams } from "../services/users.service";

@Tags("Users")
@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(@Path() userId: number, @Query() name?: string): Promise<User<string>> {
        return new UsersService().get(userId, name);
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(@Body() requestBody: User<string>): Promise<void> {
        this.setStatus(201); // set return status 201
        new UsersService().create(requestBody);
        return;
    }
}
