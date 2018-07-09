import {
    Authorized, Body, CurrentUser, Delete, Get, JsonController, OnUndefined, Param, Post, Put
} from 'routing-controllers';

import { RecordNotFoundError } from '../errors/RecordNotFoundError';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Authorized()
@JsonController('/users')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()
    public find(@CurrentUser() user?: User): Promise<User[]> {
        return this.userService.find();
    }

    @Get('/:id')
    @OnUndefined(RecordNotFoundError)
    public findOne(@Param('id') id: number): Promise<User | undefined> {
        return this.userService.findOne(id);
    }

    @Post()
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put('/:id')
    public update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete('/:id')
    public delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }

}
