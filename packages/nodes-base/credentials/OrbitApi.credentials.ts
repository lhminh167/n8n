import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class OrbitApi implements ICredentialType {
	name = 'orbitApi';
	displayName = 'Orbit API';
	documentationUrl = 'orbit';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
