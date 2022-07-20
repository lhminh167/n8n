import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType, INodeProperties
} from '@lhminh167/n8n-workflow';


export class MattermostApi implements ICredentialType {
	name = 'mattermostApi';
	displayName = 'Mattermost API';
	documentationUrl = 'mattermost';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}/api/v4',
			url: '/users',
		},
	};
}
