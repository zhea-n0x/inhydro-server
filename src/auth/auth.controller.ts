import { Controller, Post, Body, UnauthorizedException, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('Auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() body: any){
        const user = this.authService.validate(body.email, body.password);
        if (!user) throw new UnauthorizedException();
        return user;
    }

    @Get('me')
    me(){
        return {message: "to be develop"};
    }
}