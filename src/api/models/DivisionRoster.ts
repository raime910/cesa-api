import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

import { Division } from './Division';
import { Organization } from './Organization';
import { User } from './User';

/**
 * This says which employee within the company is participating in the league division
 */
@Entity({ name: 'division_roster' })
export class DivisionRoster {

    /**
     * The current company the user is during the roster build.
     */
    @PrimaryColumn({ name: 'organization_id' })
    public organizationId: string;

    @PrimaryColumn({ name: 'user_id' })
    public userId: string;

    @PrimaryColumn({ name: 'division_id' })
    public divisionId: string;

    @ManyToMany(() => Organization)
    public organizations: Organization[];

    @ManyToMany(() => User)
    public players: User[];

    @OneToMany(() => Division, division => division.rosters)
    public division: Division;

}
