import { Body, Controller, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
@Controller('/users') 
export class UserController {
    private repo = new UserRepository();
    @Post()
    async createUser(@Body() userData){
        this.repo.saveUser(userData);
        return userData;
    }
}