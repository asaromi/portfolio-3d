import { get, store, query as q } from '../../src/utils/firestore.js'
import { errorResponse, successResponse } from '../../src/utils/response.js'

const getReviews = async (req, firestore) => {
	const [_, queryParams] = req.url.split('?')
	const query = q({
		db: firestore,
		refId: 'reviews',
		queryParams,
	})

	return await get({ db: firestore, query })
}

const postReview = async (req, firestore, body) => {
	const { name, message, role, company, github = null } = body
	console.log('LOGGING req.body =', body)

	if (!name || !message || !role || !company) {
		throw {
			status: 400,
			message: 'Please fill all the fields',
		}
	}

	return await store({
		collectionName: 'reviews',
		db: firestore,
		data: { name, message, role, company, github },
	})
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
		const { data: { firestore, body }, request: req } = context

		const method = req.method.toString().toUpperCase()
		if (!handleRequest[method]) {
			throw {
				status: 405,
				message: 'Method Not Allowed',
			}
		}

		const data = await handleRequest[method](req, firestore, body)
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