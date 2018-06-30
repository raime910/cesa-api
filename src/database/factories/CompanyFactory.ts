import * as Faker from 'faker';

import { Company } from '../../../src/api/models/Company';
import { define } from '../../lib/seed';

define(Company, (faker: typeof Faker, settings: { role: string }) => {
    const name = faker.company.companyName();
    const description = faker.company.catchPhrase();
    const website =  name + '.com';
    const email = faker.company.bsNoun() + '@' + website;
    const alias = faker.company.bsNoun() + ' ' + faker.company.bsAdjective;

    const company = new Company();
    company.alias = alias;
    company.description = description;
    company.email = email;
    company.name = name;
    company.website = website;

    return company;
});
