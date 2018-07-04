import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Division } from './Division';
import { Game } from './Game';
import { League } from './League';

/**
 * This serves as a link between the league and the game that is being played.
 */
@Entity({ name: 'leagueCategory' })
export class LeagueCategory {

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
    public rules: string;

    @IsNotEmpty()
    @Column()
    public prizes: string;

    @Column('datetime')
    public schedule: Date;

    @IsNotEmpty()
    @Column()
    public leagueId: string;

    @ManyToOne(() => League, league => league.categories)
    @JoinColumn({ name: 'leagueId' })
    public league: League;

    @IsNotEmpty()
    @Column()
    public gameId: string;

    @ManyToOne(() => Game, game => game.categories)
    @JoinColumn({ name: 'gameId' })
    public game: Game;

    @OneToMany(() => Division, division => division.leagueCategory)
    public divisions: Division[];

}
