import { IsNotEmpty } from 'class-validator';
import {
    BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { DivisionTeamEntry } from './DivisionTeamEntry';
import { LeagueGame } from './LeagueGame';
import { Team } from './Team';

@Entity()
export class LeagueDivision extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public leagueGameId: number;

    @ManyToOne(type => LeagueGame, leagueGame => leagueGame.divisions)
    @JoinColumn({ name: 'leagueGameId' })
    public leagueGame: LeagueGame;

    @ManyToMany(type => Team, team => team.divisions)
    @JoinTable({ name: '_division_team' })
    public teams: any;

    @ManyToOne(type => DivisionTeamEntry, entry => entry.division)
    public entries: DivisionTeamEntry[];

}
