import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Image from "next/image";

import "../globals.css";

interface Article {
	title: string;
	details: string;
	image: string;
	link: string;
	article?: string;
}

export default function NewsArticle() {
	const location = useLocation();
	const [article, setArticle] = useState<Article | null>(null);


  // scroll to top on route change
	useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


	useEffect(() => {
		// Check for article data in location.state
		if (location.state && location.state.article) {
			setArticle(location.state.article as Article);
		} else {
			console.log("No article data found");
		}
	}, [location.state]);

	if (!article) {
		return <div className="text text-center min-h-screen">No article data found! Click the logo to go back.</div>;
	}

	return (
		<div className="flex flex-col text w-11/12 lg:w-1/2 md:w-2/3 min-h-screen mb-20 mx-auto gap-4">
			<h1 className="text-4xl font-bold">{article.title}</h1>
			<h2 className="text-sm accent">{article.details}</h2>

			<Image src={article.image} alt={article.title} width={1080} height={1080} />

			<p className="my-4">{article.article}</p>
			<a
				className="text-blue-500 underline w-fit"
				href={article.link}
				target="_blank"
				rel="noopener noreferrer">
				Read more
			</a>
		</div>
	);
}