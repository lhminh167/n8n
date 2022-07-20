import {
    INodeProperties
} from '@lhminh167/n8n-workflow';

export const tagFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'tag',
				],
			},
		},
		default: '',
		description: 'The name of the tag to create',
		required: true,
	},
];
