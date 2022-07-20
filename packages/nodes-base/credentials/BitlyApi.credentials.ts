import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class BitlyApi implements ICredentialType {
	name = 'bitlyApi';
	displayName = 'Bitly API';
	documentationUrl = 'bitly';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
