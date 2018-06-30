import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Company } from './Company';
import { Pet } from './Pet';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public firstName: string;

    @IsNotEmpty()
    @Column()
    public lastName: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    public alias: string;

    @OneToMany(type => Pet, pet => pet.user)
    public pets: Pet[];

    @IsNotEmpty()
    @Column()
    public companyId: string;

    @ManyToOne(type => Company, company => company.employees)
    @JoinColumn({ name: 'companyId' })
    public company: Company;

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

}
