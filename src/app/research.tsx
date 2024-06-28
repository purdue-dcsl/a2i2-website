"use client";

import "./globals.css"


export default function Research() {

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-96">
                    <img src='/ancient-stone-column-dark.png' alt="" className="w-full" />
                    <p className="px-5 text-4xl text-center font-extrabold research-pillars-clamp"><span className="accent">Robust</span> adversarial algorithms</p>
                </div>
                <div className="grid flex-col w-96">
                    <img src='/ancient-stone-column-dark.png' alt="" className="w-full" />
                    <p className="px-5 text-4xl text-center font-extrabold research-pillars-clamp"><span className="accent">Interpretable</span> algorithms aiding the trust of the warfighter on the results of the autonomous algorithms</p>
                </div>
                <div className="grid flex-col w-96">
                    <img src='/ancient-stone-column-dark.png' alt="" className="w-full" />
                    <p className="px-5 text-4xl text-center font-extrabold research-pillars-clamp"><span className="accent">Secure</span>, distributed execution of the autonomy pipeline among multiple platforms</p>
                </div>
            </div>
            <p className="mt-6 md:mt-16 text-lg description-clamp-2">The research contributions in these three pillars will combine to achieve the end deliverable of secure-by-design autonomous
                algorithms that can operate under the constraints, and uncertainties, of a battlefield environment.
                The instantiation will be in a prototype software system called <b>SCRAMBLE </b>
                (<b>S</b>e<b>C</b>ure <b>R</b>eal-time Decision-Making for the <b>A</b>utono<b>M</b>ous <b>B</b>att<b>LE</b>field).
            </p>
            <br />
            <hr />
            <br />
            <h2 className="text-3xl accent">Representative Publications</h2>
            <div className="flex flex-col mt-6">
                <div className="flex lg:flex-row flex-col-reverse">
                    <p className="p-4 text-lg">Secure aggregation is a privacy-preserving technique used in federated learning. However, existing attacks on secure aggregation can be computationally expensive. The authors of this paper propose a new attack on secure aggregation that is more efficient by exploiting the sparsity of the aggregate update. The authors show that their attack can achieve a leakage rate of 77% even with 1000 clients in aggregation, while reducing the model size overhead by over 327x and the computation time by 3.34x compared to the state-of-the-art.</p>
                    <img src="/figure1.png" alt="Figure1" className="w-full lg:w-1/2 lg:m-4 object-contain" />
                </div>
                <p className="p-4 text-lg">Joshua C. Zhao, Ahmed Roushdy Elkordy, Atul Sharma, Yahya H. Ezzeldin, Salman Avestimehr, and Saurabh Bagchi. &quot;The Resource Problem of Using Linear Layer Leakage Attack in Federated Learning.&quot; In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 3974-3983. 2023.</p>
            </div>
            <hr className="w-1/3 ml-auto mr-auto mt-5 mb-5"/>
            <div className="flex flex-col mt-6">
                <div className="flex lg:flex-row flex-col">
                    <img src="/figure2.png" alt="Figure2" className="w-full lg:w-1/2 lg:m-4 object-contain" />
                    <p className="p-4 text-lg">Cooperative edge-assisted dynamic federated learning (CE-FL) is a new federated learning framework that addresses the challenges of heterogeneity, mobility, and dynamicity in edge networks. CE-FL allows data collection and model training to be carried out cooperatively at the end devices and edge servers, and it uses a floating aggregation point to aggregate the local models. CE-FL also considers the heterogeneity of network elements in terms of communication/computation models and the proximity to one another. In addition, CE-FL is designed to be adaptive to the dynamic environment with online variation of data at the network devices.</p>
                </div>
                <p className="p-4 text-lg">Bhargav Ganguly, Seyyedali Hosseinalipour, Kwang Taik Kim, Christopher G. Brinton, Vaneet Aggarwal, David J. Love, and Mung Chiang. &quot;Multi-edge server-assisted dynamic federated learning with an optimized floating aggregation point.&quot; IEEE/ACM Transactions on Networking (2023).</p>
            </div>
            <hr className="w-1/3 ml-auto mr-auto mt-5 mb-5"/>
            <div className="flex flex-col mt-6">
                <div className="flex lg:flex-row flex-col-reverse">
                    <p className="p-4 text-lg">Distribution shift is a change in the distribution of data that can have a significant impact on the performance of machine learning models. Prior work on distribution shift has focused on detecting if a shift has occurred, but has not provided any insights into how to mitigate the effects of the shift.
                                               <br />
                                               <br />
                                               The authors of this paper propose a new approach to explaining distribution shift using interpretable transportation maps. These maps are derived from a relaxation of the optimal transport problem, and they can be used to visualize the changes in the data distribution. The authors show that their approach can provide a better balance between detail and interpretability than baseline explanations.</p>
                    <img src="/figure3.png" alt="Figure3" className="w-full lg:w-1/2 lg:m-4 object-contain" />
                </div>
                <p className="p-4 text-lg">Sean Kulinski, and David I. Inouye. &quot;Towards explaining distribution shifts.&quot; In International Conference on Machine Learning, pp. 17931-17952. PMLR, 2023.</p>
            </div>
        </div>
    )
}