import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsMongoId, IsNumber } from "class-validator";

export class CreateProjectTaskDto {
    @IsMongoId()
    @ApiProperty()
    project: string;

    @IsMongoId()
    @ApiProperty()
    user: string;

    @IsDate()
    @ApiProperty()
    work_date: Date;

    @IsNumber()
    @ApiProperty()
    work_hours: number;

    @ApiProperty()
    description?: string;



}
