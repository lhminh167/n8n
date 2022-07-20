import { INSTANCE_ID_HEADER } from '@/constants';
import { IVersion } from '@/Interface';
import { get } from './helpers';

export async function getNextVersions(endpoint: string, version: string, instanceId: string): Promise<IVersion[]> {
	const headers = {[INSTANCE_ID_HEADER as string] : instanceId};
	return await get(endpoint, version, {}, headers);
}
