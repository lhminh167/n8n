import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class CalApi implements ICredentialType {
	name = 'calApi';
	displayName = 'Cal API';
	documentationUrl = 'cal';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: 'https://api.cal.com',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				apiKey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.host}}',
			url: '=/v1/memberships',
		},
	};
}
