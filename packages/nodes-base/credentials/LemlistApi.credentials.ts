import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class LemlistApi implements ICredentialType {
	name = 'lemlistApi';
	displayName = 'Lemlist API';
	documentationUrl = 'lemlist';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
