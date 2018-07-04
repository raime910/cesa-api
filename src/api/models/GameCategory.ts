import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Game } from './Game';

@Entity({ name: 'game_category' })
export class GameCategory {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'shortName' })
    public shortName: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @OneToMany(type => Game, game => game.gameCategory)
    public games: Game[];

}
