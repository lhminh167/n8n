import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class SpontitApi implements ICredentialType {
	name = 'spontitApi';
	displayName = 'Spontit API';
	documentationUrl = 'spontit';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
	];
}
