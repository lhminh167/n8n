import { ICredentialType, INodeProperties } from '@lhminh167/n8n-workflow';

const scopes = ['https://www.googleapis.com/auth/adwords'];

export class GoogleAdsOAuth2Api implements ICredentialType {
	name = 'googleAdsOAuth2Api';
	extends = ['googleOAuth2Api'];
	displayName = 'Google Ads OAuth2 API';
	documentationUrl = 'google';
	properties: INodeProperties[] = [
		{
			displayName: 'Developer Token',
			name: 'developerToken',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: scopes.join(' '),
		},
	];
}
