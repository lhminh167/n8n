import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

const scopes = [
	'https://www.googleapis.com/auth/bigquery',
];

export class GoogleBigQueryOAuth2Api implements ICredentialType {
	name = 'googleBigQueryOAuth2Api';
	extends = [
		'googleOAuth2Api',
	];
	displayName = 'Google BigQuery OAuth2 API';
	documentationUrl = 'google';
	properties: INodeProperties[] = [
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: scopes.join(' '),
		},
	];
}
