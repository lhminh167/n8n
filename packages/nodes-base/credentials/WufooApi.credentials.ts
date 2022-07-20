import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class WufooApi implements ICredentialType {
	name = 'wufooApi';
	displayName = 'Wufoo API';
	documentationUrl = 'wufoo';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
		},
	];
}
