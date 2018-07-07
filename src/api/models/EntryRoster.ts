import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DivisionTeamEntry } from './DivisionTeamEntry';
import { User } from './User';

@Entity()
export class EntryRoster extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public userId: string;

    @IsNotEmpty()
    @Column()
    public entryId: string;

    @ManyToOne(type => User, user => user.entryRosters)
    @JoinColumn({ name: 'userId' })
    public user: User;

    @ManyToOne(type => DivisionTeamEntry, entry => entry.entryRosters)
    @JoinColumn({ name: 'entryId' })
    public entry: DivisionTeamEntry;

}
