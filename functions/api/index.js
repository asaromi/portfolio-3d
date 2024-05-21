import { successResponse } from '../../src/utils/response.js'

export async function onRequest(context) {
	console.log(`[LOGGING FROM /hello]: Request came from ${context.request}`)
	return successResponse({
		data: {
			message: 'Hello from the serverless function!',
		},
	})
}