import { IsNotEmpty } from 'class-validator';
import {
    Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { GameCategory } from './GameCategory';
import { League } from './League';

@Entity()
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
    @Column()
    public gameCategoryId: string;

    @IsNotEmpty()
    @ManyToOne(type => GameCategory, gameCategory => gameCategory.games)
    @JoinColumn({ name: 'gameCategoryId' })
    public gameCategory: GameCategory;

    @ManyToMany(type => League)
    @JoinTable({ name: 'gameLeagues'})
    public leagues: League[];

    public toString(): string {
        return `${this.name}`;
    }

}
