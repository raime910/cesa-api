import { IsNotEmpty } from 'class-validator';
import {
    Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import { GameCategory } from './GameCategory';
import { League } from './League';
import { LeagueCategory } from './LeagueCategory';

@Entity({ name: 'game' })
export class Game {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @IsNotEmpty()
    @Column({ name: 'gameCategoryId' })
    public gameCategoryId: string;

    @IsNotEmpty()
    @ManyToOne(type => GameCategory, gameCategory => gameCategory.games)
    @JoinColumn({ name: 'gameCategoryId' })
    public gameCategory: GameCategory;

    @ManyToMany(() => League)
    // @JoinTable({ name: 'game_league' })
    public leagues: League[];

    @OneToMany(() => LeagueCategory, leagueCategory => leagueCategory.game)
    public categories: LeagueCategory[];

    public toString(): string {
        return `${this.name}`;
    }

}
