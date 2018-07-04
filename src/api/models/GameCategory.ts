import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Game } from './Game';

@Entity({ name: 'gameCategory' })
export class GameCategory {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public shortName: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @ManyToOne(type => Game, game => game.categories)
    public game: Game;

}
