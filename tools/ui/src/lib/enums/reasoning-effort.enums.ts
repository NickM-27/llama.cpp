/**
 * Reasoning effort levels for thinking models.
 * Sent to the server as reasoning_effort when the chat template supports
 * the level, otherwise mapped to token budgets.
 */
export enum ReasoningEffort {
	DEFAULT = 'default',
	HIGH = 'high',
	LOW = 'low',
	MAX = 'max',
	MEDIUM = 'medium',
	MINIMAL = 'minimal',
	OFF = 'off',
	XHIGH = 'xhigh'
}
