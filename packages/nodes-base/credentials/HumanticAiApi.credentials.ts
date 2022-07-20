import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class HumanticAiApi implements ICredentialType {
	name = 'humanticAiApi';
	displayName = 'Humantic AI API';
	documentationUrl = 'humanticAi';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
