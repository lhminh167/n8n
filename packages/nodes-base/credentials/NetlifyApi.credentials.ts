import {
    ICredentialType,
    NodePropertyTypes
} from '@lhminh167/n8n-workflow';

export class NetlifyApi implements ICredentialType {
	name = 'netlifyApi';
	displayName = 'Netlify API';
	documentationUrl = 'netlify';
	properties = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}