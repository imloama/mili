import {
    Controller, Get, Res, Param, Post, Body, UseGuards, Query,
} from '@nestjs/common';
import { BoilingPointService } from './boilingpoint.service';
import { TopicService } from './topic.service';
import { OSSService } from '../common/oss.service';
import { BoilingPointTopic, BoilingPoint } from '../entity/boilingpoint.entity';
import { MyHttpException } from '../core/exception/my-http.exception';
import { ErrorCode } from '../constants/error';
import { EditBoilingPointDto } from './dto/edit-boilingpoint.dto';
import { APIPrefix } from '../constants/constants';
import { CurUser } from '../core/decorators/user.decorator';
import { ActiveGuard } from '../core/guards/active.guard';
import { UserService } from '../user/user.service';
import { MustIntPipe } from '../core/pipes/must-int.pipe';
import { ParsePagePipe } from '../core/pipes/parse-page.pipe';

@Controller()
export class BoilingPointController {
    constructor(
        private readonly boilingPointService: BoilingPointService,
        private readonly topicService: TopicService,
        private readonly userService: UserService,
        private readonly ossService: OSSService,
    ) {}

    @Get('/boiling/topic/:topicID')
    async boilingView(@Param('topicID', MustIntPipe) topicID: number, @Res() res) {
        const [ uploadPolicy, topics ] = await Promise.all([
            this.ossService.requestPolicy(),
            this.topicService.list(),
        ]);
        const curTopic: BoilingPointTopic = topics.find(t => t.id === topicID);
        if (!curTopic) {
            throw new MyHttpException({
                errorCode: ErrorCode.NotFound.CODE,
            });
        }
        res.render('pages/boilingpoint/boilingpoint', {
            uploadPolicy,
            topics,
            topicID,
            boilingPointType: '',
        });
    }

    // if (idOrType === 'recommended') {
    //     boilingPointType = 'recommended';
    // } else if (idOrType === 'hot') {
    //     boilingPointType = 'hot';
    // } else if (idOrType === 'following') {
    //     boilingPointType = 'following';
    // } else {

    @Post(`${APIPrefix}/boilingpoints`)
    @UseGuards(ActiveGuard)
    async create(@CurUser() user, @Body() editBoilingPointDto: EditBoilingPointDto) {
        const result = await this.boilingPointService.create(editBoilingPointDto, user.id);
        const now = new Date();
        const boilingPoint = new BoilingPoint();
        boilingPoint.id = result.raw.insertId;
        boilingPoint.htmlContent = editBoilingPointDto.htmlContent;
        boilingPoint.createdAt = now;
        boilingPoint.browseCount = 0;
        boilingPoint.commentCount = 0;
        boilingPoint.userID = user.id;
        boilingPoint.topicID = editBoilingPointDto.topicID;
        if (boilingPoint.topicID) {
            boilingPoint.topic = await this.topicService.basic(boilingPoint.topicID)
        }
        return {
            ...boilingPoint,
            imgs: editBoilingPointDto.imgs && editBoilingPointDto.imgs.length ? editBoilingPointDto.imgs : [],
        };
    }

    @Get(`${APIPrefix}/boilingpoints`)
    async list(@Query('topicID', MustIntPipe) topicID: number, @Query('page', ParsePagePipe) page: number) {
        const boilingPoints = await this.boilingPointService.listByTopic(topicID, page);
        return {
            ...boilingPoints,
        };
    }
}