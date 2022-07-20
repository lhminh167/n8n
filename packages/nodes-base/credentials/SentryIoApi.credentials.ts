import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class SentryIoApi implements ICredentialType {
	name = 'sentryIoApi';
	displayName = 'Sentry.io API';
	documentationUrl = 'sentryIo';
	properties: INodeProperties[] = [
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
		},
	];
}
