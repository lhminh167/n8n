import {
    INodeTypeBaseDescription,
    INodeVersionedType
} from '@lhminh167/n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';
import { MattermostV1 } from './v1/MattermostV1.node';

export class Mattermost extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Mattermost',
			name: 'mattermost',
			icon: 'file:mattermost.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Sends data to Mattermost',
			defaultVersion: 1,
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new MattermostV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
