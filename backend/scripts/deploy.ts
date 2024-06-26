import { address, toNano } from "ton-core";
import { MainContract } from "../wrappers/MainContract";
import { compile, NetworkProvider } from "@ton-community/blueprint";

export async function run(provider: NetworkProvider) {
  const myContract = MainContract.createFromConfig(
    {
      number: 0,
      address: address("kQA_Ro_IUyHqym8nU8753Jo25rFOO8Zo3Z_4AUiGR75nFERV"),
      owner_address: address(
        "kQA_Ro_IUyHqym8nU8753Jo25rFOO8Zo3Z_4AUiGR75nFERV"
      ),
    },
    await compile("MainContract")
  );

  const openedContract = provider.open(myContract);

  openedContract.sendDeploy(provider.sender(), toNano("0.05"));

  await provider.waitForDeploy(myContract.address);
}