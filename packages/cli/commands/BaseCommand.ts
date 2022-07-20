import { LoggerProxy } from '@lhminh167/n8n-workflow';
import { Command } from '@oclif/core';
import { Db } from '../src';
import { User } from '../src/databases/entities/User';
import { getLogger, Logger } from '../src/Logger';

export abstract class BaseCommand extends Command {
	logger: Logger;

	/**
	 * Lifecycle methods
	 */

	async init(): Promise<void> {
		this.logger = getLogger();
		LoggerProxy.init(this.logger);

		await Db.init();
	}

	async finally(): Promise<void> {
		if (process.env.NODE_ENV === 'test') return;

		this.exit();
	}

	/**
	 * User Management utils
	 */

	defaultUserProps = {
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		resetPasswordToken: null,
	};

	async getInstanceOwner(): Promise<User> {
		const globalRole = await Db.collections.Role.findOneOrFail({
			name: 'owner',
			scope: 'global',
		});

		const owner = await Db.collections.User.findOne({ globalRole });

		if (owner) return owner;

		const user = new User();

		Object.assign(user, { ...this.defaultUserProps, globalRole });

		await Db.collections.User.save(user);

		return Db.collections.User.findOneOrFail({ globalRole });
	}
}
