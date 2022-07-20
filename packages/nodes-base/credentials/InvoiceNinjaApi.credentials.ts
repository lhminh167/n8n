import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class InvoiceNinjaApi implements ICredentialType {
	name = 'invoiceNinjaApi';
	displayName = 'Invoice Ninja API';
	documentationUrl = 'invoiceNinja';
	properties: INodeProperties[] = [
		{
			displayName: 'URL',
			name: 'url',
			type: 'string',
			default: 'https://app.invoiceninja.com',
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
}
