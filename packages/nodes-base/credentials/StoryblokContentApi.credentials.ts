import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class StoryblokContentApi implements ICredentialType {
	name = 'storyblokContentApi';
	displayName = 'Storyblok Content API';
	documentationUrl = 'storyblok';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
