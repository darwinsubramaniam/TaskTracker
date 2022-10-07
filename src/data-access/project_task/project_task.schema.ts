import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose,  {Document} from "mongoose";
import { Project } from "../project/project.schema";
import { User } from "../user/user.schema";

export type ProjectTaskDocument = ProjectTask & Document;

@Schema()
export class ProjectTask {
    @Prop({ required: true })
    work_date: Date;
    @Prop({ required: true })
    work_hours: number; // 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4
    @Prop({ required: false })
    description?: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Project.name })
    project: Project;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: User;
}

export const ProjectTaskSchema = SchemaFactory.createForClass(ProjectTask);