import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    CreateUser(UserData: UserDto): Promise<void>;
    findOne(id: number): Promise<User>;
    DeleteUser(id: number): void;
}
