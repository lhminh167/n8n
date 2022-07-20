import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class WiseApi implements ICredentialType {
	name = 'wiseApi';
	displayName = 'Wise API';
	documentationUrl = 'wise';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			default: 'live',
			options: [
				{
					name: 'Live',
					value: 'live',
				},
				{
					name: 'Test',
					value: 'test',
				},
			],
		},
		{
			displayName: 'Private Key (Optional)',
			name: 'privateKey',
			type: 'string',
			default: '',
			description: 'Optional private key used for Strong Customer Authentication (SCA). Only needed to retrieve statements, and execute transfers.',
			typeOptions: {
				alwaysOpenEditWindow: true,
			},
		},
	];
}
