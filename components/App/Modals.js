import React from 'react';
import DeviceSelectModal from '../DeviceSelectModal/DeviceSelectModal';
import InviteOthersModal from '../Call/InviteOthersModal';
import CreatePollModal from '../Call/CreatePollModal';
import PollModal from '../Call/PollModal';
import PollResultModal from '../Call/PollResultModal';
import PopupModal from '../Call/PopupModal';

export const Modals = () => {
  return (
    <>
      <DeviceSelectModal />
      <InviteOthersModal />
      <CreatePollModal />
      <PopupModal />
      <PollModal />
      <PollResultModal />
    </>
  );
};

export default Modals;
