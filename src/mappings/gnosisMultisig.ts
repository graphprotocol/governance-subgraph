import { Address, Bytes } from "@graphprotocol/graph-ts";
import {
  RemovedOwner,
  AddedOwner,
  GnosisMultisig,
  ChangedThreshold,
} from "../types/CouncilMultisig/GnosisMultisig";

import { Council } from "../types/schema";

export function handleAddedOwner(event: AddedOwner): void {
  let council = createOrLoadCouncil(event.address);
  let members = council.members;

  let index = members.indexOf(event.params.owner);
  if (index == -1) members.push(event.params.owner);

  council.members = members;
  council.save();
}

export function handleRemovedOwner(event: RemovedOwner): void {
  let council = createOrLoadCouncil(event.address);
  let members = council.members;

  let index = members.indexOf(event.params.owner);
  if (index != -1) members = members.splice(index, 1);

  council.members = members;
  council.save();
}

export function handleChangedThreshold(event: ChangedThreshold): void {
  let council = createOrLoadCouncil(event.address);
  council.threshold = event.params.threshold;
  council.save();
}

function createOrLoadCouncil(multisigAddress: Address): Council {
  let council = Council.load("1");
  if (council == null) {
    council = new Council("1");
    let contract = GnosisMultisig.bind(multisigAddress);
    let members: Array<Bytes> = [];
    let membersAsAddress = contract.getOwners();
    for (let i = 0; i < membersAsAddress.length; i++) {
      members.push(membersAsAddress[i] as Bytes);
    }
    council.members = members;
    council.threshold = contract.getThreshold();
    council.save();
  }
  return council as Council;
}
