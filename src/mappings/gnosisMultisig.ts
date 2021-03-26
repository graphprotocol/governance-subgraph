import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  RemovedOwner,
  AddedOwner,
} from "../types/CouncilMultisig/GnosisMultisig";

import { Council } from "../types/schema";


export function handleAddedOwner(
  event: AddedOwner
): void {
  // let council = Council.load('1');
  // if (council == null){
  //   council = new Council('1')
  // }
  // let members = council.members;

  // if (members == null) {
  //   members = [];
  // }
  // let index = destinations.indexOf(event.params.dst);

  // // It was not there before
  // if (index == -1) {
  //   // Lets add it in
  //   if (event.params.allowed) {
  //     destinations.push(event.params.dst);
  //   }
  //   // If false was passed, we do nothing
  //   // It was there before
  // } else {
  //   // We are revoking access
  //   if (!event.params.allowed) {
  //     destinations.splice(index, 1);
  //   }
  //   // Otherwise do nothing
  // }
  // tokenLock.tokenDestinations = destinations;
  // tokenLock.save();
}

export function handleRemovedOwner(): void {}