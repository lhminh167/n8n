import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MindeeReceiptApi implements ICredentialType {
	name = 'mindeeReceiptApi';
	displayName = 'Mindee Receipt API';
	documentationUrl = 'mindee';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
