import React from "react";
import actions from "redux/actions";
import Participants from "./Participants";
const { deleteParticipant } = actions;
const ParticipantsHandler = (props) => {
  const handleChange = (evt) => {
    props.setValue(evt.target.value);
    props.setParticipantsError(null);
  };
  const handleNewParticipant = (emails = []) => {
    if (!emails || !Array.isArray(emails)) return;
    const newParticipents = emails
      .filter((e) => e)
      .map((email) => ({
        email,
        isModerator: false,
        mainText: Object.translate("VALUE.UNKNOWN"),
        subText: email,
        shouldSend: true,
      }));
    props.setParticipants([...props.participants, ...newParticipents]);
  };
  const handleKeyDown = (evt) => {
    if (!["Enter", "Tab", ","].includes(evt.key)) return;
    evt.preventDefault();

    var email = props.value.trim();

    if (!email || !props.isValidEmail(email)) return;
    handleNewParticipant([email]);
    props.setValue("");
  };
  const handlePaste = (evt) => {
    evt.preventDefault();
    props.setValue("");

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !props.isInList(email));
      handleNewParticipant(toBeAdded);
    }
  };
  const handleChooseContact = (obj) => {
    if (!obj) return;
    if (!props.isValidEmail(obj?.email)) return;
    const newObj = { ...obj };
    delete newObj.id;
    props.setParticipants((prevArr) => [
      ...prevArr,
      { ...newObj, isModerator: false, shouldSend: true },
    ]);
    props.setValue("");
    props.setParticipantsError(null);
  };

  const handleDeleteParticipant = (p, idx) => {
    if (!p.id)
      return props.setParticipants((prevArr) =>
        prevArr.filter((e, i) => i !== idx)
      );
    window.dispatch(deleteParticipant({ id: p.id }));
  };
  return (
    <Participants
      createdBy={props.selectedObj?.createdBy || null}
      open={props.value?.trim().length > 1 || false}
      error={props.participantsError}
      textFieldValue={props.value}
      textFieldOnChange={handleChange}
      textFieldOnKeyDown={handleKeyDown}
      textFieldOnPaste={handlePaste}
      myContacts={props.myContacts}
      handleChooseContact={handleChooseContact}
      participants={props.participants}
      setParticipants={props.setParticipants}
      handleDeleteParticipant={handleDeleteParticipant}
    />
  );
};

export default ParticipantsHandler;
