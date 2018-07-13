import { EntityRepository, Repository } from 'typeorm';

import { DivisionTeamEntry } from '../models/DivisionTeamEntry';

@EntityRepository(DivisionTeamEntry)
export class DivisionTeamEntryRepository extends Repository<DivisionTeamEntry>  {

}
