import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Activity {
	activity: string;
	participants: number;
	type: string;
	price: number;
	accessibility: number;
	link?: string;
	key: string;
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://www.boredapi.com/api/',
	}),
	endpoints(builder) {
		return {
			fetchActivities: builder.query<
				Activity,
				{
					type: string;
					participants: number;
					price: number;
					accessibility: number;
				}
			>({
				query({
					type = '',
					participants = '',
					price = '',
					accessibility = '',
				}) {
					return `/activity?type=${type}&participants=${participants}&price=${price}&accessibility=${accessibility}`;
				},
			}),
		};
	},
});

export const { useFetchActivitiesQuery } = apiSlice;
