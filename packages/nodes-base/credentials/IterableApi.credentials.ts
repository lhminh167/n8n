import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class IterableApi implements ICredentialType {
	name = 'iterableApi';
	displayName = 'Iterable API';
	documentationUrl = 'iterable';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
