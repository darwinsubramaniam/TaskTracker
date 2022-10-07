import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UpdateProjectTaskDto } from "../../project_task/dto/update-project_task.dto";
import { CreateProjectTaskDto } from "../../project_task/dto/create-project_task.dto";
import { ProjectDocument } from "../project/project.schema";
import { ProjectTask, ProjectTaskDocument } from "./project_task.schema";

@Injectable()
export class ProjectTaskDataAccessService {
    constructor(@InjectModel(ProjectTask.name) private projectTaskModel: Model<ProjectTaskDocument>) { }

    async create(createProjectTaskDto: CreateProjectTaskDto): Promise<ProjectTask> {
        const createProjectTask = new this.projectTaskModel(createProjectTaskDto);
        return createProjectTask.save();
    }

    async findAll(): Promise<ProjectTask[]> {
        return this.projectTaskModel.find().exec();
    }

    async findOne(id: string): Promise<ProjectTask> {
        return this.projectTaskModel.findById(id);
    }

    async update(id: string, updateProjectTaskDto: UpdateProjectTaskDto): Promise<ProjectTask> {
        return this.projectTaskModel.findByIdAndUpdate(id, updateProjectTaskDto, { new: true });
    }

    async remove(id: string): Promise<ProjectTask> {
        return this.projectTaskModel.findByIdAndRemove(id);
    }

}