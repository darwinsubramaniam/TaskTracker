import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTaskDto } from './create-project_task.dto';

export class UpdateProjectTaskDto extends PartialType(CreateProjectTaskDto) {}
