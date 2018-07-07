import { IsNotEmpty } from 'class-validator';
import {
    BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import { EntryRoster } from './EntryRoster';
import { LeagueDivision } from './LeagueDivision';
import { Team } from './Team';

@Entity()
export class DivisionTeamEntry extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public divisionId: number;

    @IsNotEmpty()
    @Column()
    public teamId: number;

    @ManyToOne(type => LeagueDivision, leagueDivision => leagueDivision.entries)
    @JoinColumn({ name: 'divisionId' })
    public division: LeagueDivision;

    @ManyToOne(type => Team, team => team.entries)
    @JoinColumn({ name: 'teamId' })
    public team: Team;

    @OneToMany(type => EntryRoster, entryRoster => entryRoster.user)
    public entryRosters: EntryRoster[];
}
