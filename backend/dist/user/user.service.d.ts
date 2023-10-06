import { Model } from 'mongoose';
import { User } from '../interface/user.interface';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    findOne(username: string): Promise<User>;
}
