import React from 'react';
import Modal from 'react-modal';
import s from '../../src/career/career.css';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '999',
    boxSizing: 'border-box',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    width: '90%',
    padding: '80px 25px',
    position: 'relative',
    background: '#F1F7F8',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
};

class SendCv extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: '',
      email: '',
      file: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className={s.textcenter}>
        <button onClick={this.openModal} className={s.cbutton} type="submit">{this.props.btntext}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          className={{
            base: 'mycvPopup',
            afterOpen: 'mycvPopup-open',
            beforeClose: 'mycvPopup-close',
          }}
          modalClassName="sendcvpopup"
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal} className={s.close}>Close</button>
          <h3 className={s.sectionTitle}>The following information is required.</h3>
          <div className={s.formContainer}>
            <form method="POST" name="SendCvNotification" encType="multipart/form-data" data-netlify="true" data-netlify-honeypot="hiddenField" action="" >
              <input type="hidden" name="hiddenField" />
              <input type="hidden" name="form-name" value="SendCvNotification" />
              <input type="text" name="name" defaultValue={this.state.name} required placeholder="Name" className={s.formInput} />
              <input type="text" name="email" defaultValue={this.state.email} required placeholder="Email" className={s.formInput} />
              <label htmlFor="cvfile" className={s.fileContainer}>
                 Upload your CV
                <input type="file" defaultValue={this.state.file} required name="cvfile" className="upload-file" accept=".doc, .docx, .pdf" />
              </label>
              <div className={s.clearfix}>{''}</div>
              <input type="submit" value="Submit" className={s.submit} />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SendCv;
