import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class SyncroMspApi implements ICredentialType {
	name = 'syncroMspApi';
	displayName = 'SyncroMSP API';
	documentationUrl = 'syncromsp';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
		},
	];
}
