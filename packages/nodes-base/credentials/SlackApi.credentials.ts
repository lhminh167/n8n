import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class SlackApi implements ICredentialType {
	name = 'slackApi';
	displayName = 'Slack API';
	documentationUrl = 'slack';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
			required: true,
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
			baseURL: 'https://slack.com',
			url: '/api/users.profile.get',
		},
		rules: [
			{
				type: 'responseSuccessBody',
				properties: {
					key: 'error',
					value: 'invalid_auth',
					message: 'Invalid access token',
				},
			},
		],
	};
}
