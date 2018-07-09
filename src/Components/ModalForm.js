import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class ModalForm extends React.Component {
  render() {
    return <Form>
        <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <Input type="text" name="firstName" id="firstName" />
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" />
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="enter a vaild email" />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Qty.</Label>
          <Input type="select" name="quantity" id="quantity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="address1">Address line 1</Label>
          <Input type="address" name="address1" id="address1" placeholder="address line 1" />
          <Label for="address2">Address line 2</Label>
          <Input type="address" name="address2" id="address2" placeholder="address line 2" />
          <Label for="city">City/Town</Label>
          <Input type="address" name="city" id="city" placeholder="city/town" />
          <Label for="state">State</Label>
          <Input type="address" name="state" id="state" placeholder="state" />
          <Label for="zip">Zip Code</Label>
          <Input type="address" name="zip" id="zip" placeholder="zip code" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>;
  }
}
