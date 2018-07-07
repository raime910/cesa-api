import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueStaff } from './LeagueStaff';

@Entity()
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => LeagueStaff, leagueStaff => leagueStaff.role)
    public staffs: LeagueStaff[];

}
