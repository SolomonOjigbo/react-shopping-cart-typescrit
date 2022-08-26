import React from "react";
import { useQuery } from "react-query";
import { Drawer, Grid, LinearProgress } from "@mui/material";
import { Wrapper } from "./App.styles";
import Item from "./Item/Item";

export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		"products",
		getProducts
	);
	console.log(data);

	const getTotalItems = () => null;

	const addToCartHandler = () => null;

	const removeFromCartHandler = () => null;

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong... </div>;

	return (
		<Wrapper>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item item={item} addToCartHandler={addToCartHandler} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
}

export default App;
