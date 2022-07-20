import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class PhantombusterApi implements ICredentialType {
	name = 'phantombusterApi';
	displayName = 'Phantombuster API';
	documentationUrl = 'phantombuster';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
