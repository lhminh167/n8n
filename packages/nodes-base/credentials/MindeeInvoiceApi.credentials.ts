import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MindeeInvoiceApi implements ICredentialType {
	name = 'mindeeInvoiceApi';
	displayName = 'Mindee Invoice API';
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
