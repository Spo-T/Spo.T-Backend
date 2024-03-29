import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { unique: true, nullable: false, length: 60 })
    email: string;

    @Column('char', { nullable: false, length: 60 })
    password: string;

    @Column('varchar', { nullable: false, length: 3000 })
    profile: string;

    constructor(id: string, email: string, password: string, profile: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profile = profile;
    }
}