import { INodeExecutionData } from '@lhminh167/n8n-workflow';

export const replaceNullValues = (item: INodeExecutionData) => {
	if (item.json === null) {
			item.json = {};
	}
	return item;
};
