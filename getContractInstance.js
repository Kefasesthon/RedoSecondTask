

import { ethers } from "ethers";
import contractABI from "./abi.json";

const getContractInstance = () => {
    const contractAddress = "0xa45436889EcB7deEbef868B8B71dfA5433933aD0";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
    );

      return contract;
}

export default getContractInstance;