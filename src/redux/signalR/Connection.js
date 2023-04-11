import * as SignalR from "@microsoft/signalr";
import * as IncomingEvents from "./eventsKeys/Incoming";
import actions from "redux/actions";
const {
  setIncomingCall,
  setCallResponse,
  getConnectedContacts,
  getDisconnectedContacts,
} = actions;

const signalRURL = `${window.domain}/directCall`;
// const signalRURL = `https://meeting.infostrategic.com/meet/directCall`;

let connection = null;
let isConnected = false;

const disconnect = async () => {
  if (!connection) return;
  connection.stop();
  connection = null;
};

const handleIncomingEvents = (action, data) => {
  window.dispatch(action({ data }));
};

const handleOutgoingEvents = (event, data) => {
  if (!connection || !isConnected) return;
  connection.invoke(event, data);
};

const connectSignalR = async (authUser) => {
  await disconnect();
  if (!authUser || !authUser.token) return;
  connection = new SignalR.HubConnectionBuilder()
    .withUrl(signalRURL, {
      accessTokenFactory: () => authUser.token,
    })
    .configureLogging(SignalR.LogLevel.Trace)
    .build();
  connection.serverTimeoutInMilliseconds = 120000; // 120 second
  connection
    .start()
    .then((resp) => {
      console.info("connection started");
      isConnected = true;
    })
    .catch((err) => {
      connection = null;
      console.error("testsignalrconnection000", err);
    });

  connection.on("UserConnected", (id) => {
    window.dispatch(getConnectedContacts({ id: Number(id) }));
  });
  connection.on("UserDisconnected", (id) => {
    window.dispatch(getDisconnectedContacts({ id: Number(id) }));
  });

  connection.on(IncomingEvents.START_CALL_NOTIFY, (data) => {
    window.dispatch(setIncomingCall({ data }));
  });

  connection.on(IncomingEvents.RESPOND_TO_CALL_NOTIFY, (data) => {
    window.dispatch(setCallResponse({ data }));
  });
};

export {
  connection,
  isConnected,
  connectSignalR,
  disconnect,
  handleIncomingEvents,
  handleOutgoingEvents,
};
