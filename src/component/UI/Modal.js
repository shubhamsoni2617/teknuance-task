import React from 'react';
import classes from './Modal.module.css';


const Modal=props=>props.showForm ? <div className={classes.Modal}>
                                       <i className="close icon" onClick={props.toggleModal}/>
                                          {props.children}
                                    </div>:null

export default Modal;