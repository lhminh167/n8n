import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class AsanaApi implements ICredentialType {
	name = 'asanaApi';
	displayName = 'Asana API';
	documentationUrl = 'asana';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
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

}
