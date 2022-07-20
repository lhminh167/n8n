import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class TravisCiApi implements ICredentialType {
	name = 'travisCiApi';
	displayName = 'Travis API';
	documentationUrl = 'travisCi';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
}
