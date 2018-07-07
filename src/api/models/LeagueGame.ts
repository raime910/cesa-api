import { IsNotEmpty } from 'class-validator';
import {
    BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import { Game } from './Game';
import { League } from './League';
import { LeagueDivision } from './LeagueDivision';

@Entity()
export class LeagueGame extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public leagueId: number;

    @IsNotEmpty()
    @Column()
    public gameId: number;

    @ManyToOne(type => League, league => league.leagueGames)
    @JoinColumn({ name: 'leagueId' })
    public league: League;

    @ManyToOne(type => Game, game => game.leagueGames)
    @JoinColumn({ name: 'gameId' })
    public game: Game;

    @OneToMany(type => LeagueDivision, leagueDivision => leagueDivision.leagueGame)
    public divisions: LeagueDivision[];

}
