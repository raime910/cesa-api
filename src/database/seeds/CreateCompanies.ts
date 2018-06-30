import { Connection } from 'typeorm';

import { Company } from '../../../src/api/models/Company';
import { User } from '../../../src/api/models/User';
import { Factory, Seed, times } from '../../lib/seed';

export class CreateCompanies implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();
        await times(10, async (n) => {
            const company = await factory(Company)().seed();
            const employees = await factory(User)().makeMany(10);
            company.employees = employees;
            em.save(employees);
            return await em.save(company);
        });
    }
}
