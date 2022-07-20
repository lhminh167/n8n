import { IDataObject } from "@lhminh167/n8n-workflow";

export type LoaderGetResponse = {
	data: Array<{
		id: string;
		name: string;
	}>
} & IDataObject;

export type Option = {
	value: string;
	name: string;
};
