import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { League } from './League';
import { LeagueDivision } from './LeagueDivision';

@Entity()
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
    public leagueId: string;

    @ManyToOne(type => League, league => league.categories)
    @JoinColumn({ name: 'leagueId'})
    public league: League;

    @OneToMany(() => LeagueDivision, leagueDivision => leagueDivision.leagueCategory)
    public divisions: LeagueDivision[];

}
