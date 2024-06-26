// MediaModal.jsx
import React from 'react';
import { Modal } from 'react-bootstrap';
import MediaRowImages from '../MediaRowImages';
import MediaRowHeader from '../MediaRowHeader';
import left_arrow  from '/left-arrow-svgrepo-com.svg';

import './MediaModal.css'

const MediaModal = ({ showModal, handleCloseModal }) => (
  <Modal className="modal-medias" show={showModal} onHide={handleCloseModal} centered>
    <Modal.Header closeButton>
      <Modal.Title>وسائل التواصل الإجتماعي</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">

        {/* First Row  with Header Title*/}
        <MediaRowHeader title="مجلس النواب" icon={left_arrow} />
        <MediaRowImages  title1="Facebook" link_1="https://www.facebook.com/parlement.ma"  title2="Youtube" link_3="https://twitter.com/Parlement_ma"  link_2='https://www.youtube.com/channel/UCLmLW2hwH-kk9w8QrdX8uAA' title3="X (Twitter)"  image1="/qr-code-fb-cr.png" image2="/qr-code-py-cr.png" image3="/qr-code-pt-cr.png"  />
        {/* Second Row */}
        <MediaRowHeader  title="مجلس المستشارين" icon={left_arrow} />
        <MediaRowImages title1="Facebook"  link_1="https://www.facebook.com/chambredesconseillers.officiel/"   link_2="https://www.youtube.com/c/ChambredesConseillersMaroc" title2="Youtube" image1="/qr-code-fb-cc.png" image2="/qr-code-py-cc.png" />

    </Modal.Body>
  </Modal>
);

export default MediaModal;
