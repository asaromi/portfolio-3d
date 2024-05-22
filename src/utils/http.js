const Authorization = localStorage.getItem('authorization')

export const fetchOptions = ({ body: requestBody = {}, headers = {}, method = "GET" }) => {
	const body = Object.keys(requestBody).length ? JSON.stringify(requestBody) : undefined

	return {
		method,
		body,
		headers: {
			'Content-Type': 'application/json',
			Authorization,
			...headers,
		},
	}
}

const httpRequest = async (url, options) => {
	const response = await fetch(url, options)

	if (!response.ok) throw new Error(response.statusText)
	const result = await response?.json() || await response.text()

	return result
}

export default httpRequest