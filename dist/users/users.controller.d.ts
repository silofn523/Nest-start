import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { UserDto } from 'src/dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    GetAllUser(): Promise<User[]>;
    OneUser(id: number): Promise<User>;
    CreateUser(UserData: UserDto): Promise<void>;
    DeleteUser(id: number): void;
}
