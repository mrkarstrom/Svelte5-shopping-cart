import type { PageLoad } from './$types';
import type { Product } from '$lib/types';

export const load = (async () => {
    const products = await fetch('https://dummyjson/products').then(res => res.json());

    return {
        products = products.products as Product[];
    };
}) satisfies PageLoad;