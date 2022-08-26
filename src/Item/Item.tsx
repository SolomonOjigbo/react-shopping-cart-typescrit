import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./Item.styles";
import { CartItemType } from "../App";

type Props = {
	item: CartItemType;
	addToCartHandler: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCartHandler }) => (
	<Wrapper>
		<img src={item.image} alt={item.title} />

		<div>
			<h3>{item.title} </h3>
			<p>{item.description} </p>
			<h3>${item.price}</h3>
		</div>
		<Button onClick={() => addToCartHandler(item)}>Add to Cart</Button>
	</Wrapper>
);

export default Item;
