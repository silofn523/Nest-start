import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserDto } from 'src/dto/user.dto'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User> // db와 직접적인 통신
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async CreateUser(UserData: UserDto) {
    await this.usersRepository.save(UserData)
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id })
  }
  DeleteUser(id: number) {
    this.usersRepository.delete({ id })
  }
}