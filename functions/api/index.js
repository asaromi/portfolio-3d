import { successResponse } from '../../src/utils/response.js'

export async function onRequest(context) {
	return successResponse({
		data: {
			message: 'Hello from the serverless function!',
		},
	})
}