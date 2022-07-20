import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class MediumApi implements ICredentialType {
	name = 'mediumApi';
	displayName = 'Medium API';
	documentationUrl = 'medium';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
