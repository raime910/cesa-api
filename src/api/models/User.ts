import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { EntryRoster } from './EntryRoster';
import { LeagueStaff } from './LeagueStaff';
import { Pet } from './Pet';

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

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
    public organizationId: number;

    @OneToMany(type => LeagueStaff, leagueStaff => leagueStaff.user)
    public staffs: LeagueStaff[];

    @OneToMany(type => EntryRoster, entryRoster => entryRoster.user)
    public entryRosters: EntryRoster[];

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

}
