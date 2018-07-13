import { EntityRepository, Repository } from 'typeorm';

import { LeagueDivision } from '../models/LeagueDivision';

@EntityRepository(LeagueDivision)
export class LeagueDivisionRepository extends Repository<LeagueDivision>  {

}
