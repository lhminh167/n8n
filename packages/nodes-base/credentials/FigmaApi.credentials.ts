import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class FigmaApi implements ICredentialType {
	name = 'figmaApi';
	displayName = 'Figma API';
	documentationUrl = 'figma';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
