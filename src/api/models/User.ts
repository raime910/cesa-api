import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueStaff } from './LeagueStaff';
import { Pet } from './Pet';

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public firstName: string;

    @IsNotEmpty()
    @Column()
    public lastName: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    public alias: string;

    @OneToMany(() => Pet, pet => pet.user)
    public pets: Pet[];

    @Column({ nullable: true })
    public organizationId: string;

    @OneToMany(type => LeagueStaff, leagueStaff => leagueStaff.user)
    public staffs: LeagueStaff[];

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

}
