import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class StoryblokManagementApi implements ICredentialType {
	name = 'storyblokManagementApi';
	displayName = 'Storyblok Management API';
	documentationUrl = 'storyblok';
	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
