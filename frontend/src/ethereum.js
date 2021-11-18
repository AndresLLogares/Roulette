import { ethers, Contract } from "ethers";
import Ruleta from "./Ruleta.json";

const getBlockchain = () => 
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if(window.ethereum) {
                await window.ethereum.enable();
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const signerAddress = await signer.getAddress();
                const roulette = new Contract(
                    Ruleta.address,
                    Ruleta.abi,
                    signer
                );
                resolve({signerAddress, roulette});
            }
            resolve({signerAddress: undefined, roulette: undefined})
        })
    })

export default getBlockchain;