import { initializeApp } from '@firebase/app'
import { collection, doc, getDocs, getFirestore, orderBy, query as q, setDoc, where } from '@firebase/firestore'
import { DocumentReference, Query } from '@firebase/firestore'

import generateID from './ulid.js'

const db = getFirestore(
	initializeApp({
		apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
		authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_FIREBASE_APP_ID,
	}),
)

export const query = ({ refId, queryParams }) => {
	if (!refId) {
		throw new Error('refName is required')
	}

	const [refName, id] = refId.split('/')
	const conditions = []

	if (queryParams) {
		// 	make for in URLSearchParams object from queryParams
		for (const [key, value] of new URLSearchParams(queryParams)) {
			conditions.push(
				where(key, '==', value)
			)
		}
	}

	if (id) {
		conditions.push(
			where('id', '==', id)
		)
	}

	return q(
		collection(db, refName),
		...conditions,
		orderBy('createdAt', 'desc')
	)
}

export const get = async ({ query: q, refId }) => {
	const [refName, id] = refId.split('/')

	const _query = q instanceof Query ? q : q(
		collection(db, refName),
		where('id', '==', id)
	)

	const querySnapshot = await getDocs(_query)
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}))
}

export const store = async (data, collectionName) => {
	const id = generateID()
	const refDoc = doc(`${collectionName}/${id}`)

	await setDoc(refDoc, { id, ...data })
		.catch((e) => {
			throw e
		})

	return { id, ...data }
}

export const update = async (data, refId) => {
	const docRef = refId instanceof DocumentReference ? refId : doc(refId)

	await setDoc(docRef, data, { merge: true })
	return { id: docRef.id, ...data }
}

export default db
