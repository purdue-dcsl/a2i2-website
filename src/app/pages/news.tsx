"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import Papa from "papaparse";
import "../globals.css";

export default function News() {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([{ title: "", details: "", image: "", link: "" }]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("./news_articles.csv");
            const data = await response.text();

            const articles = Papa.parse(data, { header: true }).data.reverse() as { title: string, details: string, image: string, link: string }[];

            // Remove empty articles with blank fields
            articles.forEach((article, index) => {
                if (!article.title || !article.details || !article.image || !article.link) {
                    articles.splice(index, 1);
                }
            });

            setArticles(articles);
            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-wrap w-full mt-6">
                {articles.map((article, index) => (
                    <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-[1.01] transition-all" key={index}>
                        <Link
                            to="/article"
                            state={{ article }}
                            className="flex flex-col p-3 m-3 border tabButton h-96"
                        >
                            <Image src={article.image} alt={article.title} className="h-1/2 w-full mb-2 object-cover" width={1080} height={1080} />
                            <p className="font-bold text-lg overflow-scroll">{article.title}</p>
                            <p className="pt-1 text-gray-500 text-xs">{article.details}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
