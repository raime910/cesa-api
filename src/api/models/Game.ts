import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueGame } from './LeagueGame';

@Entity()
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @ManyToOne(type => LeagueGame, leagueGame => leagueGame.league)
    public leagueGames: LeagueGame[];
}
