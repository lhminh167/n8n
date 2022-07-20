import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class NotionApi implements ICredentialType {
	name = 'notionApi';
	displayName = 'Notion API';
	documentationUrl = 'notion';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.notion.com/v1',
			url: '/users',
		},
	};
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '=Bearer {{$credentials.apiKey}}',
				'Notion-Version': '2021-05-13',
			},
		},
	};
}
