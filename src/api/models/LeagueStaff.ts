import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { League } from './League';
import { Role } from './Role';
import { User } from './User';

@Entity()
export class LeagueStaff extends BaseEntity {

    @PrimaryColumn()
    public leagueId: number;

    @PrimaryColumn()
    public roleId: number;

    @PrimaryColumn()
    public userId: number;

    @ManyToOne(type => League, league => league.staffs)
    public league: League;

    @ManyToOne(type => Role, role => role.staffs)
    public role: Role;

    @ManyToOne(type => User, user => user.staffs)
    public user: User;

}
