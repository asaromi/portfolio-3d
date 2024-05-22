import { collection, doc, getDocs, orderBy, query as q, setDoc, where } from 'firebase/firestore'
import { DocumentReference, Query } from 'firebase/firestore'
import generateID from './ulid.js'

export const query = ({ db, refId, queryParams }) => {
	if (!refId) {
		throw new Error('refName is required')
	}

	const [refName, id] = refId.split('/')
	const conditions = [
		collection(db, refName)
	]

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
		...conditions,
		orderBy('createdAt', 'desc')
	)
}

export const get = async ({ db, query, refId }) => {
	let _query = query
	if (!(_query instanceof Query) && refId) {
		const [refName, id] = refId.split('/')

		_query = q(
			collection(db, refName),
			where('id', '==', id)
		)
	}

	console.log('query:', _query._query.path)

	const result = []
	const querySnapshot = await getDocs(_query)

	console.log('querySnapshot.size:', querySnapshot.size)
	console.log('querySnapshot.docs:', querySnapshot.docs)

	querySnapshot.forEach((doc) => {
		result.push(doc.data())
	})

	console.log('generateID:', generateID())

	return result
}

export const store = async ({ db, data, collectionName }) => {
	const id = generateID()
	const refDoc = doc(
		collection(db, collectionName),
		id
	)

	await setDoc(refDoc, { id, ...data })
	return { id, ...data }
}

export const update = async ({ db, data, refId }) => {
	const docRef = refId instanceof DocumentReference ? refId : doc(db, refId)

	await setDoc(docRef, data, { merge: true })
	return { id: docRef.id, ...data }
}
