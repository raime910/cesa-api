import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DivisionRoster } from './DivisionRoster';
import { User } from './User';

@Entity({ name: 'organization' })
export class Organization {

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
    public email: string;

    @IsNotEmpty()
    @Column()
    public website: string;

    @IsNotEmpty()
    @Column()
    public alias: string;

    @OneToMany(() => User, user => user.company)
    public employees: User[];

    @ManyToMany(() => DivisionRoster)
    public divisionRosters: DivisionRoster[];

}
