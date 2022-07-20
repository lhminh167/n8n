import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class BambooHrApi implements ICredentialType {
	name = 'bambooHrApi';
	displayName = 'BambooHR API';
	documentationUrl = 'bambooHr';
	properties: INodeProperties[] = [
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
