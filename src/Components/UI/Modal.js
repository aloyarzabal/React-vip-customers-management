import classes from './Modal.module.css';
import { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
const nodeRef = useRef(null);

    return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef}
                in={props.show}
                appear={props.show}
                timeout={500}
                // classNames="fade" 
                classNames={{
                    appear: classes.fadeAppear,
                    appearActive: classes.fadeAppearActive
                }}
                >
                <div ref={nodeRef} className={classes.Modal}>
                    <div>{props.children}</div>
                </div>
            </CSSTransition>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay show={props.show}>{props.children}</ModalOverlay>,
                portalElement)}

        </Fragment>
    );
};

export default Modal;