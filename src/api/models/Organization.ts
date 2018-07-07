import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Team } from './Team';

@Entity()
export class Organization extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public website: string;

    @ManyToOne(type => Team, team => team.organization)
    public teams: Team[];

}
