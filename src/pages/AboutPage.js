import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";

const AboutPage = () => {
	return (
		<main>
			<PageHero title="About" />
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="nice dest" />
				<article>
					<div className="title">
						<h2>Our Story</h2>
						<div className="underline"></div>
						<p>
							Quaerat nisi eligendi eos voluptates molestias, illum optio
							eum ut distinctio dicta enim? Animi architecto iure,
							dolores in est, ullam quasi expedita facere autem tempora
							exercitationem nulla, amet quidem deserunt! Exercitationem
							ea reiciendis corrupti, in expedita nesciunt sint illo
							doloremque rem eum nihil ex aspernatur consequuntur, non
							optio distinctio quisquam eos fugit. Autem nam architecto
							praesentium voluptatibus explicabo optio perferendis? In
							ipsum fugit dicta laborum? Rem, dolorem! Autem qui animi
							tenetur eius dolores. Provident iure quaerat est quo omnis
							cumque fugit iste sunt, asperiores, facere, nihil sapiente
							necessitatibus voluptatum expedita. Autem qui animi tenetur
							eius dolores. Provident iure quaerat est quo omnis cumque
							fugit iste sunt, asperiores, facere, nihil sapiente
							necessitatibus voluptatum expedita.
						</p>
					</div>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
