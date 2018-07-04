import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Game } from './Game';
import { LeagueCategory } from './LeagueCategory';

@Entity({ name: 'league' })
export class League {

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
    public email: string;

    @IsNotEmpty()
    @Column()
    public website: string;

    @IsNotEmpty()
    @Column()
    public twitter: string;

    @IsNotEmpty()
    @Column()
    public twitch: string;

    @IsNotEmpty()
    @Column()
    public facebook: string;

    @IsNotEmpty()
    @Column()
    public youtube: string;

    @IsNotEmpty()
    @Column()
    public discord: string;

    @IsNotEmpty()
    @Column()
    public googlePlus: string;

    /**
     * These are the league categories
     */
    @ManyToMany(() => LeagueCategory)
    @JoinTable({ name: '_league_leagueCategory' })
    public categories: LeagueCategory[];

    /**
     * This says which games are available for this league.
     */
    @ManyToMany(() => Game)
    @JoinTable({ name: '_league_game' })
    public availableGames: Game[];

}
