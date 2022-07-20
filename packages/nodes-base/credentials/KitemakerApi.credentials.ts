import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class KitemakerApi implements ICredentialType {
	name = 'kitemakerApi';
	displayName = 'Kitemaker API';
	documentationUrl = 'kitemaker';
	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'personalAccessToken',
			type: 'string',
			default: '',
		},
	];
}
