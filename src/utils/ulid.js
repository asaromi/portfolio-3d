import { monotonicFactory } from 'ulidx'

const generateID =  (unixTime) => {
	const id = monotonicFactory()(unixTime ?? +new Date())
	return id.toString().toLowerCase()
}

export default generateID