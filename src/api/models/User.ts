import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Organization } from './Organization';
import { Pet } from './Pet';

@Entity({ name: 'user' })
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

    @Column({ nullable: true })
    public organizationId: string;

    @ManyToOne(type => Organization, organization => organization.employees)
    @JoinColumn({ name: 'organizationId' })
    public company: Organization;

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

}
