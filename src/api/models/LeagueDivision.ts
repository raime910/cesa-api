import { IsNotEmpty } from 'class-validator';
import {
    Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { Company } from './Company';
import { LeagueCategory } from './LeagueCategory';

@Entity()
export class LeagueDivision {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public leagueCategoryId: string;

    @ManyToOne(type => LeagueCategory, leagueCategory => leagueCategory.divisions)
    @JoinColumn({ name: 'leagueCategoryId' })
    public leagueCategory: LeagueCategory;

    @IsNotEmpty()
    @ManyToMany(() => Company)
    @JoinTable({ name: 'companyLeagueDivisions'})
    public companies: Company[];

}
