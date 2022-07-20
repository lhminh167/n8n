import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class SegmentApi implements ICredentialType {
	name = 'segmentApi';
	displayName = 'Segment API';
	documentationUrl = 'segment';
	properties: INodeProperties[] = [
		{
			displayName: 'Write Key',
			name: 'writekey',
			type: 'string',
			default: '',
		},
	];
}
