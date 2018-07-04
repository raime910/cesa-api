import { IsNotEmpty } from 'class-validator';
import {
    Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { DivisionRoster } from './DivisionRoster';
import { LeagueCategory } from './LeagueCategory';
import { Organization } from './Organization';

/**
 * Division provides another layer of depth into the league + game.
 */
@Entity({ name: 'division' })
export class Division {

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
    @ManyToMany(() => Organization)
    @JoinTable({ name: '_organization_division' })
    public organizations: Organization[];

    @ManyToMany(() => DivisionRoster)
    public divisionRosters: DivisionRoster[];

}
