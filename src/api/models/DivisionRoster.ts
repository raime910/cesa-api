import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';

import { Division } from './Division';
import { Organization } from './Organization';
import { User } from './User';

/**
 * This says which employee within the company is participating in the league division
 */
@Entity({ name: 'divisionRoster' })
export class DivisionRoster {

    /**
     * The current company the user is during the roster build.
     */
    @PrimaryColumn()
    public organizationId: string;

    @PrimaryColumn()
    public playerId: string;

    @PrimaryColumn()
    public divisionId: string;

    @ManyToMany(() => Organization, organization => organization.divisionRosters)
    public organization: Organization;

    @ManyToMany(() => User, user => user.divisionRosters)
    public player: User;

    @ManyToMany(() => Division, division => division.divisionRosters)
    public division: Division;

}
