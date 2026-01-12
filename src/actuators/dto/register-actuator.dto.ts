import { IsBoolean, IsEnum, IsNotEmpty } from "class-validator";
import { ActuatorEnum } from "src/enums/actuator-type.enum";

export class RegisterActuatorDto{
    @IsNotEmpty()
    key: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEnum(ActuatorEnum, {message: 'Actuator type not registered'})
    type: ActuatorEnum;

    @IsBoolean()
    @IsNotEmpty()
    state: boolean;
}