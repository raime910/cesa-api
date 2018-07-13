import { EntityRepository, Repository } from 'typeorm';

import { League } from '../models/League';

@EntityRepository(League)
export class LeagueRepository extends Repository<League>  {

}
