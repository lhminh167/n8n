import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class ApiTemplateIoApi implements ICredentialType {
	name = 'apiTemplateIoApi';
	displayName = 'APITemplate.io API';
	documentationUrl = 'apiTemplateIo';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.apitemplate.io/v1',
			url: '/list-templates',
		},
	};
}
