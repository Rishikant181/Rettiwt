// PACKAGES
import { createCommand } from 'commander';
import { Rettiwt } from 'rettiwt-api';

// UTILITY
import { output } from '../helper/CliUtils';

// Initializing Rettiwt instance
const rettiwt = new Rettiwt({ apiKey: process.env.API_KEY });

// Creating the 'user' command
const user = createCommand('user').description('Command for accessing resources releated to users');

// Details
user.command('details')
	.description('Fetch the details of the user with the given id/username')
	.argument('<id>', 'The username/id of the user whose details are to be fetched')
	.action(async (id: string) => {
		const details = await rettiwt.user.details(id);
		output(details);
	});

export default user;
