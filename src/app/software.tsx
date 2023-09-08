"use client";

import "./globals.css"

export default function Team() {

    return (
        <div className="p-3 md:p-12 w-5/6 lg:p-18">
            <ol style={{ listStyleType: 'decimal' }}>
                <li className="text-lg mb-10">
                    <a href="https://github.com/purdue-dcsl/rcd-neurips22" target="_blank" rel="noopener noreferrer">
                        <span className="text-lg accent">https://github.com/purdue-dcsl/rcd-neurips22</span>
                    </a>
                    <br />
                    Source code for Root Cause Analysis of Failures in Microservices through Causal Discovery. Paper appeared in <b>NeurIPS 2022</b>.
                </li>
                <li className="text-lg mb-10">
                    <a href="https://drive.google.com/drive/folders/1K1w1Ida5Cr15b5Fhidax-i-fNpWZjvet" target="_blank" rel="noopener noreferrer">
                        <span className="text-lg accent">https://drive.google.com/drive/folders/1K1w1Ida5Cr15b5Fhidax-i-fNpWZjvet</span>
                    </a>
                    <br />
                    This dataset contains a corpus of time series datasets, our model for predicting the best time series forecasting model for a hitherto unseen dataset, and experimental results for replicability. This is by far the largest public corpus for time series anomaly prediction.
                </li>
                <li className="text-lg mb-10">
                    <a href="https://github.com/inouye-lab/alignment-upper-bound" target="_blank" rel="noopener noreferrer">
                        <span className="text-lg accent">https://github.com/inouye-lab/alignment-upper-bound</span>
                    </a>
                    <br />
                    Cooperative Distribution Alignment via JSD Upper Bound. Paper appeared in <b>NeurIPS 2022</b>.
                </li>
                <li className="text-lg mb-10">
                    <a href="https://github.com/inouye-lab/starcraftimage" target="_blank" rel="noopener noreferrer">
                        <span className="text-lg accent">https://github.com/inouye-lab/starcraftimage</span>
                    </a>
                    <br />
                    The StarCraftImage dataset from the CVPR 2023 paper: StarCraftImage: A Dataset For Prototyping Spatial Reasoning Methods For Multi-Agent Environments
                </li>
                <li className="text-lg mb-10">
                    <a href="https://zenodo.org/record/6345733" target="_blank" rel="noopener noreferrer">
                        <span className="text-lg accent">https://zenodo.org/record/6345733</span>
                    </a>
                    <br />
                    The software for adaptive video object detection on mobile GPUs, called LiteReconfig. Paper appeared in <b>EuroSys 2022</b>.
                </li>
            </ol>
        </div>
    )
}
