import { EntityRepository, Repository } from 'typeorm';

import { LeagueGame } from '../models/LeagueGame';

@EntityRepository(LeagueGame)
export class LeagueGameRepository extends Repository<LeagueGame>  {

}
