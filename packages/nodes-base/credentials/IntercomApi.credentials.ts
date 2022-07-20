import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class IntercomApi implements ICredentialType {
	name = 'intercomApi';
	displayName = 'Intercom API';
	documentationUrl = 'intercom';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
