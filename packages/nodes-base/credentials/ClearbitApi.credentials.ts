import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class ClearbitApi implements ICredentialType {
	name = 'clearbitApi';
	displayName = 'Clearbit API';
	documentationUrl = 'clearbit';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
