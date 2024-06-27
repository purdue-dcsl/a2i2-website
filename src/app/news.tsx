"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./globals.css"

export default function News() {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([{ title: "", details: "", image: "", link: "" }]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("./news_articles.csv");
            const data = await response.text();

            const articles = Papa.parse(data, { header: true }).data.reverse() as { title: string, details: string, image: string, link: string }[];

            setArticles(articles);
            setLoading(false);
        }

        fetchArticles();
    }, []);


    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-wrap w-full mt-6">
                {articles.map((article, index) => (
                    <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition-all">
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 m-3 border h-96">
                            <img src={article.image} className="w-full object-cover h-48" />
                            <p className="pt-2 font-bold text-lg overflow-scroll">{article.title}</p>
                            <p className="pt-1 text-gray-500 text-xs">{article.details}</p>

                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
