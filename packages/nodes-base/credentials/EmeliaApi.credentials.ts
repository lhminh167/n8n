import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class EmeliaApi implements ICredentialType {
	name = 'emeliaApi';
	displayName = 'Emelia API';
	documentationUrl = 'emelia';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
