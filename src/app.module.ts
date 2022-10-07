import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { DataAccessModule } from './data-access/data-access.module';
import { ProjectTaskModule } from './project_task/project_task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/TaskTracker?authSource=admin'),
    ProjectModule,
    DataAccessModule,
    ProjectTaskModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
