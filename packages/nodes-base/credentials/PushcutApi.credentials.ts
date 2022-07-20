import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class PushcutApi implements ICredentialType {
	name = 'pushcutApi';
	displayName = 'Pushcut API';
	documentationUrl = 'pushcut';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
