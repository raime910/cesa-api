import { IsNotEmpty } from 'class-validator';
import {
    BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

import { DivisionTeamEntry } from './DivisionTeamEntry';
import { LeagueDivision } from './LeagueDivision';
import { Organization } from './Organization';

@Entity()
export class Team extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public organizationId: number;

    @ManyToOne(type => Organization, organization => organization.teams)
    @JoinColumn({ name: 'organizationId' })
    public organization: Organization;

    @ManyToMany(type => LeagueDivision, leagueDivision => leagueDivision.teams)
    @JoinTable({ name: '_division_team' })
    public divisions: LeagueDivision[];

    @ManyToOne(type => DivisionTeamEntry, entry => entry.division)
    public entries: DivisionTeamEntry[];

}
