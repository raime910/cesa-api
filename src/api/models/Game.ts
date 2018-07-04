import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

    @ManyToMany(() => League)
    @JoinTable({ name: '_league_game' })
    public leagues: League[];

    @OneToMany(() => LeagueCategory, leagueCategory => leagueCategory.game)
    public categories: LeagueCategory[];

    public toString(): string {
        return `${this.name}`;
    }

}
