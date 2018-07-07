import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Organization } from '../models/Organization';
import { OrganizationRepository } from '../repositories/OrganizationRepository';
import { events } from '../subscribers/events';

@Service()
export class OrganizationService {

    constructor(
        @OrmRepository() private organizationRepository: OrganizationRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface

    ) { }

    public find(): Promise<Organization[]> {
        this.log.info('Find all organizations');
        return this.organizationRepository.find({ relations: ['employees'] });
    }

    public findOne(id: number): Promise<Organization> {
        this.log.info('Find one organization');
        return this.organizationRepository.findOne({ id });
    }

    public async create(organization: Organization): Promise<Organization> {
        this.log.info('Create a new organization => ', organization.name);
        const newOrganization = await this.organizationRepository.save(organization);
        this.eventDispatcher.dispatch(events.organization.created);
        return newOrganization;
    }

    public update(id: number, organization: Organization): Promise<Organization> {
        this.log.info('Update an organization => ' + id);
        organization.id = id;
        return this.organizationRepository.save(organization);
    }

    public async delete(id: number): Promise<void> {
        this.log.info('Delete an organization => ' + id);
    }
}
