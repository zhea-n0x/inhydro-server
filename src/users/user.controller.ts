import {Controller, Get, Post, Body} from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController{
    constructor(private usersService: UsersService){}

    @Post('register')
    create(@Body() body: any){
        return this.usersService.create(body);
    }

    @Get()
    findAll(){
        return this.usersService.findAll();
    }
}