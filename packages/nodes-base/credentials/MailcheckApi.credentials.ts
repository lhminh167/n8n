import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MailcheckApi implements ICredentialType {
	name = 'mailcheckApi';
	displayName = 'Mailcheck API';
	documentationUrl = 'mailcheck';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
