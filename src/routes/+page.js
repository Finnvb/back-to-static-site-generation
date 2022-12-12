import createClient from '$lib/vendors/prismicClient'

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getAllByType('story');

//   console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}

