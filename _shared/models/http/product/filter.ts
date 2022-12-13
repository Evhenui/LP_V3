export type HttpProductQuery = {
	categoryId?: string
	searchQuery?: string,

	minPrice?: number,
	maxPrice?: number,
	manufacturers?: string,
	specifications?: string,

	referenceId?: string,
}

