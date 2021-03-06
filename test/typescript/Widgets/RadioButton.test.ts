import {Color, RadioButton, PropertyChangedEvent, RadioButtonSelectEvent, RadioButtonProperties} from 'tabris';

let widget: RadioButton = new RadioButton();

// Properties
let checked: boolean;
let text: string;
let textColor: Color;
let tintColor: Color;
let checkedTintColor: Color;

checked = widget.checked;
text = widget.text;
textColor = widget.textColor;
tintColor = widget.tintColor;
checkedTintColor = widget.checkedTintColor;

widget.checked = checked;
widget.text = text;
widget.textColor = textColor;
widget.tintColor = tintColor;
widget.checkedTintColor = checkedTintColor;

let properties: RadioButtonProperties = {checked, text, textColor, tintColor, checkedTintColor};
widget = new RadioButton(properties);
widget.set(properties);

// Events
let target: RadioButton = widget;
let timeStamp: number = 0;
let type: string = 'foo';
let value: boolean = true;

let checkedChangedEvent: PropertyChangedEvent<RadioButton, boolean> = {target, timeStamp, type, value};
let radioButtonSelectEvent: RadioButtonSelectEvent = {target, timeStamp, type, checked};

widget.on({
  checkedChanged: (event: PropertyChangedEvent<RadioButton, boolean>) => {},
  select: (event: RadioButtonSelectEvent) => {}
});
