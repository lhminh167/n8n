import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class GumroadApi implements ICredentialType {
	name = 'gumroadApi';
	displayName = 'Gumroad API';
	documentationUrl = 'gumroad';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
