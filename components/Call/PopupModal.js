import React, { useState } from 'react';
import { useUIState } from '../../contexts/UIStateProvider';
import Field from '../Field';
import { SelectInput } from '../Input';
import Modal from '../Modal';

export const CREATE_POPUP_MODAL = 'create-popup';

function PopupModal() {
  const [selected, setSelect] = useState(1);
  const { currentModals, closeModal } = useUIState();

  return (
    <Modal
      title="Popup"
      isOpen={currentModals[CREATE_POPUP_MODAL]}
      onClose={() => closeModal(CREATE_POPUP_MODAL)}>
      <Field label="Select Respected Number:">
        <SelectInput
          //   disabled={!cameras.length}
          onChange={e => setSelect(e.target.value)}>
          {[...Array(10).keys()].map(e => (
            <option key={e} value={e + 1} selected={selected == e + 1}>
              {e + 1}
            </option>
          ))}
        </SelectInput>
        <p>{`Selected Value is ${selected}`}</p>
      </Field>
    </Modal>
  );
}

export default PopupModal;
