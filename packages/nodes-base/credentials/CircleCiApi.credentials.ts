import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class CircleCiApi implements ICredentialType {
	name = 'circleCiApi';
	displayName = 'CircleCI API';
	documentationUrl = 'circleCi';
	properties: INodeProperties[] = [
		{
			displayName: 'Personal API Token',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
