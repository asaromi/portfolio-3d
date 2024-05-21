// define this function in the index.js file

export async function onRequest(context) {
	console.log(`[LOGGING FROM /hello]: Request came from ${context.request}`)
	return new Response(
		JSON.stringify({
			message: 'Hello from the API',
		}), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
}