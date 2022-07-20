import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class BeeminderApi implements ICredentialType {
	name = 'beeminderApi';
	displayName = 'Beeminder API';
	documentationUrl = 'beeminder';
	properties: INodeProperties[] = [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Auth Token',
			name: 'authToken',
			type: 'string',
			default: '',
		},
	];
}
