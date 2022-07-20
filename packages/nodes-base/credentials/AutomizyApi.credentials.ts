import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class AutomizyApi implements ICredentialType {
	name = 'automizyApi';
	displayName = 'Automizy API';
	documentationUrl = 'automizy';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
}
