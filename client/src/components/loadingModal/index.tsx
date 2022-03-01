import React from "react";
import styled from "styled-components";
import Loader from "../shared/loader";

const Modal = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: var(--background);
	display: grid;
	place-items: center;
	text-align: center;

	h1 {
		font-size: 5rem;
	}
`;

const LoadingModal = () => {
	return (
		<Modal>
			<div>
				<h1>!Facebook</h1>
				<Loader />
			</div>
		</Modal>
	);
};

export default LoadingModal;