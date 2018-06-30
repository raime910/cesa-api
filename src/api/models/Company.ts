import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueDivision } from './LeagueDivision';
import { User } from './User';

@Entity()
export class Company {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    public website: string;

    @IsNotEmpty()
    @Column()
    public alias: string;

    @OneToMany(type => User, user => user.company)
    public employees: User[];

    @ManyToMany(type => LeagueDivision)
    @JoinTable({ name: 'companyLeagueDivisions' })
    public leagueDivisions: LeagueDivision[];

}
