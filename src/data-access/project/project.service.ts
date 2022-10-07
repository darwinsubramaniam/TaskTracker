import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project, ProjectDocument } from "./project.schema";
import { CreateProjectDto } from "src/project/dto/create-project.dto";
import { UpdateProjectDto } from "src/project/dto/update-project.dto";

@Injectable()
export class ProjectDataAccessService {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        const createProject = new this.projectModel(createProjectDto);
        return createProject.save();
    }

    async findAll(): Promise<Project[]> {
        return this.projectModel.find().exec();
    }

    async findOne(id: string): Promise<Project> {
        return this.projectModel.findById(id);
    }

    async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
        return this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true });
    }

    async remove(id: string): Promise<Project> {
        return this.projectModel.findByIdAndRemove(id);
    }
}