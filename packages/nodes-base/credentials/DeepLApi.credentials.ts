import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class DeepLApi implements ICredentialType {
	name = 'deepLApi';
	displayName = 'DeepL API';
	documentationUrl = 'deepL';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Plan',
			name: 'apiPlan',
			type: 'options',
			options: [
				{
					name: 'Pro Plan',
					value: 'pro',
				},
				{
					name: 'Free Plan',
					value: 'free',
				},
			],
			default: 'pro',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				auth_key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.apiPlan === "pro" ? "https://api.deepl.com/v2" : "https://api-free.deepl.com/v2" }}',
			url: '/usage',
		},
	};
}
