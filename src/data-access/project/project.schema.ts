import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "../user/user.schema";

export type ProjectDocument = Project & Document;

@Schema()
export class Project{
    @Prop({required: true})
    name: string;
    @Prop()
    description: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    owner: User[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);