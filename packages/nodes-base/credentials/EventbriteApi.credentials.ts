import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class EventbriteApi implements ICredentialType {
	name = 'eventbriteApi';
	displayName = 'Eventbrite API';
	documentationUrl = 'eventbrite';
	properties: INodeProperties[] = [
		{
			displayName: 'Private Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
