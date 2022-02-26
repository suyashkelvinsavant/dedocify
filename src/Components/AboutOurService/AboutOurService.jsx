import React from 'react';
import { Card } from 'react-bootstrap';
import "./AboutOurService.css";

const AboutOurService = () => {
    return (
        <div id="AboutOurService" className='AboutOurService'>
            <div className='wrapper'>
                <div className='carousel'>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://resources-en.newconomy.media/2018/10/shutterstock_1125724118.jpg"
                                alt="Card image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Behind The Scenes🤫</p>
                            <p>Wanna know why we choose ipfs?? 👇🏻✨</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.zzUlvpNR0ZPqriPdLnmbKgHaEF?pid=ImgDet&rs=1"
                                alt="ipfs 1 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p>When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, and given a unique fingerprint called a content identifier (CID). This CID acts as an permanent record of your file as it exists at that point in time.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://image.ipfsmain.cn/news/202007/09/93305205a789552421c555c78a3ba945.png"
                                alt="ipfs 2 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p>When other nodes look up your file, they ask their peer nodes who's storing the content referenced by the file's CID. When they view or download your file, they cache a copy — and become another provider of your content until their cache is cleared.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.gE36InuQqpLBwEfXT_ySsgHaDr?pid=ImgDet&rs=1"
                                alt="ipfs 3 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p>A node can pin content in order to keep (and provide) it forever, or discard content it hasn't used in a while to save space. This means each node in the network stores only content it is interested in, plus some indexing information that helps figure out which node is storing what.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.5OxkPQmb9emMl-gpAWlBugHaDf?pid=ImgDet&rs=1"
                                alt="ipfs 4 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p>If you add a new version of your file to IPFS, its cryptographic hash is different, and so it gets a new CID. This means files stored on IPFS are resistant to tampering and censorship — any changes to a file don't overwrite the original, and common chunks across files can be reused in order to minimize storage costs.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://i1.wp.com/coinsutra.com/wp-content/uploads/2018/04/How-To-Use-MetaMask-Wallet.jpg"
                                alt="meta mask image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Auth Using MetaMask😼</p>
                            <p>MetaMask provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.L7NYEyFEHVD2iB9S_d4q_AHaHa?pid=ImgDet&rs=1"
                                alt="eth 1 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Blockchain and Examples</p>
                            <p>Sounds cool😎? right🤔.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.dRiU5f29Zi7Tb9yXMvLSIQHaEJ?pid=ImgDet&rs=1"
                                alt="eth 2 image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Ξ - Ethereum</p>
                            <p>Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <Card.Img
                                src="https://th.bing.com/th/id/OIP.jLf3FrOc1iVgM0AEcJ7CawHaE1?pid=ImgDet&rs=1"
                                alt="bitcoin image"
                            />
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>₿ - BitCoin</p>
                            <p>Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutOurService