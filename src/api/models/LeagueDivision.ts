import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { LeagueGame } from './LeagueGame';

@Entity()
export class LeagueDivision extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public leagueGameId: number;

    @ManyToOne(type => LeagueGame, leagueGame => leagueGame.divisions)
    @JoinColumn({ name: 'leagueGameId' })
    public leagueGame: LeagueGame;

}
