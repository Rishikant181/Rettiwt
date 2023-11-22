/**
 * The search options supplied while searching for tweets.
 */
export interface ITweetSearchOptions {
	/**
	 * The list of users who made the tweets to search for.
	 *
	 * @remarks The list of users is delimited by ';'
	 */
	from?: string;

	/**
	 * The list of users to whom the tweets to be searched for are addressed.
	 *
	 * @remarks The list of users is delimited by ';'
	 */
	to?: string;

	/**
	 * The list of words to search for.
	 *
	 * @remarks The list of words is delimited by ';'
	 */
	words?: string;

	/**
	 * The list of hashtags to search for.
	 *
	 * @remarks The list of words is delimited by ';'
	 */
	hashtags?: string;

	/**
	 * The date starting from which the tweets are to be searched.
	 *
	 * @remarks The date must be in a valid date string format.
	 */
	start?: string;

	/**
	 * The date upto which the tweets are to be searched.
	 *
	 * @remarks The date must be in a valid date string format.
	 */
	end?: string;
}
