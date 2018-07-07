import { Authorized, Get, JsonController, OnUndefined, Param } from 'routing-controllers';

import { RecordNotFoundError } from '../errors/RecordNotFoundError';
import { Organization } from '../models/Organization';
import { OrganizationService } from '../services/OrganizationService';

@Authorized()
@JsonController('/organizations')
export class OrganizationController {

    constructor(
        private organizationService: OrganizationService
    ) { }

    @Get()
    public find(): Promise<Organization[]> {
        return this.organizationService.find();
    }

    @Get('/:id')
    @OnUndefined(RecordNotFoundError)
    public findOne(@Param('id') id: number): Promise<Organization | undefined> {

    }
}
