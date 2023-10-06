import { UsersService } from './user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(username: string): Promise<import("../interface/user.interface").User>;
}
