import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueGame } from './LeagueGame';

@Entity()
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public website: string;

    @ManyToOne(type => LeagueGame, leagueGame => leagueGame.league)
    public leagueGames: LeagueGame[];
}
