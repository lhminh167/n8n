import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class NocoDb implements ICredentialType {
	name = 'nocoDb';
	displayName = 'NocoDB';
	documentationUrl = 'nocoDb';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			placeholder: 'http(s)://localhost:8080',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type:'generic',
		properties: {
			headers:{
				'xc-auth': '={{credentials.apiToken}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.host}}',
			url: '/lists',
		},
	};
}
