import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class CodaApi implements ICredentialType {
	name = 'codaApi';
	displayName = 'Coda API';
	documentationUrl = 'coda';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
