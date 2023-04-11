import { handleOutgoingEvents } from "../Connection";
import * as OutgoingEvents from "../eventsKeys/Outgoing";

export const initCall = (data) => {
  handleOutgoingEvents(OutgoingEvents.START_CALL, data);
};

export const respondToCall = (data) => {
  handleOutgoingEvents(OutgoingEvents.RESPOND_TO_CALL, data);
};
