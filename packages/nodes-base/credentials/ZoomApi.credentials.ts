import { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from '@lhminh167/n8n-workflow';

export class ZoomApi implements ICredentialType {
	name = 'zoomApi';
	displayName = 'Zoom API';
	documentationUrl = 'zoom';
	properties: INodeProperties[] = [
		{
			displayName: 'JWT Token',
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
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.zoom.us/v2',
			url: '/users/me',
		},
	};
}
