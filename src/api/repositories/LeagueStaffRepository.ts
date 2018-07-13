import { EntityRepository, Repository } from 'typeorm';

import { LeagueStaff } from '../models/LeagueStaff';

@EntityRepository(LeagueStaff)
export class LeagueStaffRepository extends Repository<LeagueStaff>  {

}
