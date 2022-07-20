import {
    IExecuteFunctions
} from '@lhminh167/n8n-core';

import {
    INodeType,
    INodeTypeBaseDescription,
    INodeTypeDescription
} from '@lhminh167/n8n-workflow';

import { router } from './actions/router';
import { versionDescription } from './actions/versionDescription';
import { loadOptions } from './methods';

export class MattermostV1 implements INodeType {

	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
