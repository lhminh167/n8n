import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class LingvaNexApi implements ICredentialType {
	name = 'lingvaNexApi';
	displayName = 'LingvaNex API';
	documentationUrl = 'lingvaNex';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
