export const successResponse = ({ data, status, ...res }) => {
	return new Response(
		JSON.stringify({
			status: 'success',
			data,
			...res,
		}), {
			status: status || 200,
			headers: { 'Content-Type': 'application/json' },
		})
}