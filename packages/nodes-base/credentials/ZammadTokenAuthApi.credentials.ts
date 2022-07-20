import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class ZammadTokenAuthApi implements ICredentialType {
	name = 'zammadTokenAuthApi';
	displayName = 'Zammad Token Auth API';
	documentationUrl = 'zammad';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://n8n-helpdesk.zammad.com',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Ignore SSL Issues',
			name: 'allowUnauthorizedCerts',
			type: 'boolean',
			description: 'Whether to connect even if SSL certificate validation is not possible',
			default: false,
		},
	];
}
