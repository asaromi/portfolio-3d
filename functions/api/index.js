// define this function in the index.js file

export async function onRequest(context) {
	console.log(`[LOGGING FROM /hello]: Request came from ${context.request}`)
	const response = new Response({
		body: JSON.stringify({ message: 'Hello from Cloudflare Worker!' }),
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}