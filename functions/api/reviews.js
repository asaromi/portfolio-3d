import { get, store, query as q } from '../../src/utils/firestore.js'
import { errorResponse, successResponse } from '../../src/utils/response.js'

const getReviews = async (req) => {
	const [_, queryParams] = req.url.split('?')
	const query = q({
		refId: 'reviews',
		queryParams,
	})

	return await get({ query })
}

const postReview = async (req) => {
	const { name, message, role, company, github } = req.body
	console.log('LOGGING req.body =', req.body)

	if (!name || !message || !role || !company) {
		throw {
			status: 400,
			message: 'Please fill all the fields',
		}
	}

	return await store({ name, message, role, company, github }, 'reviews')
}

const handleRequest = {
	GET: getReviews,
	POST: postReview,
}

/**
 * @param {EventContext} context
 * @returns {Response}
 */

export async function onRequest(context) {
	try {
		let status = 200
		const { req } = context
		const method = req.method.toString().toUpperCase()

		if (!handleRequest[method]) {
			throw {
				status: 405,
				message: 'Method Not Allowed',
			}
		}

		const data = await handleRequest[method](req)
		if (!data) {
			throw {
				status: 400,
				message: 'Bad Request',
			}
		}

		if (method === 'POST') {
			status = 201
		}

		return successResponse({ data, status })
	} catch (error) {
		return errorResponse(error)
	}
}