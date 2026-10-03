import { Module } from '@nestjs/common';

import { AgentController } from './agent.controller.js';
import { AgentService } from './agent.service.js';
import { ToolRegistry } from './tool-registry.js';

import { GithubTool } from '../tools/github/github.tool.js';
import { GithubService } from '../tools/github/github.service.js';

import { TasksTool } from '../tools/tasks/tasks.tool.js';
import { TasksService } from '../tools/tasks/tasks.service.js';

import { LearningTool } from '../tools/learning/learning.tool.js';
import { LearningService } from '../tools/learning/learning.service.js';

@Module({
  controllers: [AgentController],

  providers: [
    AgentService,
    ToolRegistry,

    GithubTool,
    GithubService,

    TasksTool,
    TasksService,

    LearningTool,
    LearningService,
  ],

  exports: [AgentService],
})
export class AgentModule {}
