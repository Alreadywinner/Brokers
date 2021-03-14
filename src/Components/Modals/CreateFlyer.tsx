import React,{useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

interface CreateFlyerProps {
    visible:boolean,
    setShowModal: (value: boolean) => void; 
  }

const CreateFlyer:React.FC<CreateFlyerProps> = (props) => {
    const {visible,setShowModal} = props;
    const [category, setCategory] = useState<string|number>("");
    const [manufacturer, setManufacturer] = useState<string|number>("");
    const [device, setDevice] = useState<string|number>("");
    const [type, setType] = useState<string|number>("");

    const toggle = () => setShowModal(!visible);

    const onSubmit = () => {
      // doing all the backend calls or redux calls here
      console.log(category);
    }
    return(
        <div>
      <Modal isOpen={visible} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create A Flyer</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup row>
        <Label for="exampleSelect" sm={0} md = {6}>Category</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" value = {category}  onChange = {(e) => {setCategory(e.target.value)}}>
            <option value = "">Select Category</option>
            <option value = "Electronics">Electronics</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={0} md = {6}>Manufacturer</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" value = {manufacturer} onChange = {(e) => {setManufacturer(e.target.value);}}>
            <option value = "">Select Manufacturer</option>
            <option value = "Apple">Apple</option>
            <option value = "Samsung">Samsung</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={0} md = {6}>Device</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" value = {device} onChange = {(e) => {setDevice(e.target.value);}}>
            <option value = "">Select Device</option>
            <option value = "Iphone">Iphone X</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={0} md = {6}>Type</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" value = {type} onChange = {(e) => {setType(e.target.value);}}>
            <option value = "">Select Type</option>
            <option value = "New">New</option>
            <option value = "Used">Used</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={0} md = {6}>Upload Photos</Label>
        <Col sm={10}> 
          <Input type="file" name="file" id="exampleFile" color = "secondary"/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup>
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {toggle(); onSubmit()}} block>Create Flyer</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
    );
}

export default CreateFlyer;
