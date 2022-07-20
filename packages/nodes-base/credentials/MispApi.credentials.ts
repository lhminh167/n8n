import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MispApi implements ICredentialType {
	name = 'mispApi';
	displayName = 'MISP API';
	documentationUrl = 'misp';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Allow Unauthorized Certificates',
			name: 'allowUnauthorizedCerts',
			type: 'boolean',
			description: 'Whether to connect even if SSL certificate validation is not possible',
			default: false,
		},
	];
}
