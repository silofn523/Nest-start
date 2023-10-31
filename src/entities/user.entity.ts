import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User extends BaseEntity { // 이게 뭔진 모르겠다..
  @PrimaryGeneratedColumn()// 얘는ㄴ 꼭 써줘야 하는것 같은데..?
  id: number

  @Column()
  username: string

  @Column()
  password: string
}