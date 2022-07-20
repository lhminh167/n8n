import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class HubspotAppToken implements ICredentialType {
	name = 'hubspotAppToken';
	displayName = 'HubSpot App Token';
	documentationUrl = 'hubspot';
	properties: INodeProperties[] = [
		{
			displayName: 'APP Token',
			name: 'appToken',
			type: 'string',
			default: '',
		},
	];
}
