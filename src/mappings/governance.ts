import {
  ProposalCreated,
  ProposalUpdated,
} from "../types/GraphGovernance/GraphGovernance";

import { Proposal } from "../types/schema";

export function handleProposalCreated(event: ProposalCreated): void {
  let prop = new Proposal(event.params.proposalId.toHexString());
  prop.votes = event.params.votes;
  prop.metadata = event.params.metadata;
  prop.resolution = getResolution(event.params.resolution);
  prop.save();
}

export function handleProposalUpdated(event: ProposalUpdated): void {
  let prop = new Proposal(event.params.proposalId.toHexString());
  prop.votes = event.params.votes;
  prop.metadata = event.params.metadata;
  prop.resolution = getResolution(event.params.resolution);
  prop.save();
}

function getResolution(resolution: number): string {
  let res: string;
  resolution == 1 ? (res = "Accepted") : (res = "Rejected");
  return res;
}