import { ethers } from "ethers";
import getContractInstance from "./getContractInstance";

const Todo = ({ todo, isCompleted, updatedTime, rightIndex }) => {
    return (
        <div style={{ border: "2px solid black", borderRadius: "10px", padding: "10px", width: "300px", background: "#ffffff" }}>
            <div style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>Todo:</span>
                <span>{todo}</span>
            </div>
            <div>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>Completed?:</span>
                <span>{isCompleted ? "Yes" : "No"}</span>
            </div>
            <div style={{ marginTop: "10px" }}>Last Updated: {convertToDateTime(updatedTime)}</div>
            <div style={{ marginTop: "10px" }}><button onClick={() => handleToggle(rightIndex)} disabled={isCompleted}>Complete</button></div>
        </div>
    );
}

const convertToDateTime = (input) =>{
    return (new Date(input * 1000)).toLocaleString();
}
const handleToggle = async (input) =>   {
    const contract = getContractInstance();
    const tx = await contract.toggleTodo(input, {
        gasLimit: 500000,
        gasPrice: ethers.utils.parseUnits("20", "gwei"), 
    });
    await tx.wait();

    alert("Change made ");
}

export default Todo;
