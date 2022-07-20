import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class HunterApi implements ICredentialType {
	name = 'hunterApi';
	displayName = 'Hunter API';
	documentationUrl = 'hunter';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
