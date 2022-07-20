import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class LinearApi implements ICredentialType {
	name = 'linearApi';
	displayName = 'Linear API';
	documentationUrl = 'linear';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
