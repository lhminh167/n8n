import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class BitbucketApi implements ICredentialType {
	name = 'bitbucketApi';
	displayName = 'Bitbucket API';
	documentationUrl = 'bitbucket';
	properties: INodeProperties[] = [
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'App Password',
			name: 'appPassword',
			type: 'string',
			default: '',
		},
	];
}
