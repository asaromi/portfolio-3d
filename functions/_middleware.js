import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { errorResponse } from '../src/utils/response.js'

/**
 * @param {EventContext} context
 */

export async function onRequest(context, env) {
	try {
		console.log('env:', env)

		const firebaseConfig = {
			apiKey: context.env.VITE_FIREBASE_API_KEY,
			authDomain: context.env.VITE_FIREBASE_AUTH_DOMAIN,
			projectId: context.env.VITE_FIREBASE_PROJECT_ID,
			storageBucket: context.env.VITE_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: context.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
			appId: context.env.VITE_FIREBASE_APP_ID,
			measurementId: context.env.VITE_FIREBASE_MEASUREMENT_ID,
		}

		const [app] = getApps().length ? getApps() : [initializeApp(firebaseConfig)]
		const firestore = getFirestore(app)

		console.log('firestore:', firestore)

		const body = context.request.headers.get('Content-Type') === 'application/json' ? await context.request.json() : {}
		context.data = { firestore, body }

		return await context.next()
	} catch (e) {
		return errorResponse({ message: e.message, status: e.status })
	}
}
