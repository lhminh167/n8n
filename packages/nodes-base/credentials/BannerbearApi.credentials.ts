import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class BannerbearApi implements ICredentialType {
	name = 'bannerbearApi';
	displayName = 'Bannerbear API';
	documentationUrl = 'bannerbear';
	properties: INodeProperties[] = [
		{
			displayName: 'Project API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
