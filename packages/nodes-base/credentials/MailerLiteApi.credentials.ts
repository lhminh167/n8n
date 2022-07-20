import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MailerLiteApi implements ICredentialType {
	name = 'mailerLiteApi';
	displayName = 'Mailer Lite API';
	documentationUrl = 'mailerLite';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
