import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueCategory } from './LeagueCategory';

@Entity()
export class League {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public description: string;

    @ManyToMany(() => LeagueCategory)
    @JoinTable({name: 'leagueLeagueCategories'})
    public categories: LeagueCategory[];

}
