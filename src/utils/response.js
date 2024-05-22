export const successResponse = ({ data, status, ...res }) => {
	return new Response(
		JSON.stringify({
			status: 'success',
			data,
		}),
		{
			status: status ?? 200,
			headers: { 'Content-Type': 'application/json' },
			...res,
		},
	)
}

export const errorResponse = ({ message, status }) => {
	return new Response(
		JSON.stringify({
			status: 'error',
			message
		}),
		{
			status: status ?? 500,
			headers: { 'Content-Type': 'application/json' },
		},
	)
}

export const debug = (...args) => {
	if (import.meta.env.VITE_DEBUG === 'true') {
		console.log(...args)
	}
}