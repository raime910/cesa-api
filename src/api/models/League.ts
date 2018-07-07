import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueGame } from './LeagueGame';
import { LeagueStaff } from './LeagueStaff';

@Entity()
export class League extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => LeagueStaff, leagueStaff => leagueStaff.league)
    public staffs: LeagueStaff[];

    @ManyToOne(type => LeagueGame, leagueGame => leagueGame.league)
    public leagueGames: LeagueGame[];

}
