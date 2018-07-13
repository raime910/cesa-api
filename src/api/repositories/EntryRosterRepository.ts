import { EntityRepository, Repository } from 'typeorm';

import { EntryRoster } from '../models/EntryRoster';

@EntityRepository(EntryRoster)
export class EntryRosterRepository extends Repository<EntryRoster>  {

}
